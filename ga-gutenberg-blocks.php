<?php
/*
 Plugin Name: Gourmet Artist Gutenberg Blocks
 Plugin URI: 
 Description: Adds Gutenberg Blocks
 Version: 1.0
 Author: Juan Pablo De la torre
 Author URI: https://www.twitter.com/JuanDevWP
 License: GPL2
 License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */



 if(!defined('ABSPATH')) exit;


  /** Register The Gutenberg blocks and CSS */

  add_action('init', 'ga_register_gutenberg_blocks');

  function ga_register_gutenberg_blocks() {
     // Check if gutenberg is installed
 
     if( !function_exists('register_block_type')) {
         return;
     }
 
     // Register the Block editor script
     wp_register_script(
         'ga-editor-script', 
         plugins_url( 'build/index.js', __FILE__ ), // url to file
         array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), // dependencies
         filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js') // version
     ); 
 
     // Gutenberg Editor CSS (Backend)
     wp_register_style(
         'ga-editor-style', // name
         plugins_url( 'build/editor.css', __FILE__ ), // file
         array(), // dependencies
         filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css') // version
     );
 
     // Front end Stylesheet
     wp_register_style(
         'ga-front-end-styles', // name
         plugins_url( 'build/style.css', __FILE__ ), // file
         array(), // dependencies
         filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css') // version
     );

     $blocks = array(
        'ga/testimonial',
        'ga/hero', 
        //'ga/imagetext'
    );

    // Add the blocks and register the Stylesheets
    foreach($blocks as $block) {
        register_block_type( $block, array(
            'editor_script' => 'ga-editor-script',
            'editor_style' => 'ga-editor-style', // backend CSS
            'style' => 'ga-front-end-styles', // front end css
        ));
    }
  }


  add_filter('block_categories', 'ga_new_gutenberg_category', 10, 2);
  function ga_new_gutenberg_category( $categories, $post ) {
     return array_merge(
         $categories,
         array(
             array(
                 'slug' => 'gourmet-artist', 
                 'title' => 'Gourmet Artist', 
                 'icon' => 'awards'
             ),
         )
     );
  }




 ?>