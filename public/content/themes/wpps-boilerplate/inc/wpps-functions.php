<?php
function wpps-stylesheet() {
  if ( !is_admin() ) {
    wp_enqueue_style( 'style', get_stylesheet_uri() );
    wp_register_style('bootstrap-grid', ( get_bloginfo('template_url') . '/assets/bootstrap-grid.css'));
    wp_enqueue_style('bootstrap-grid');
}
add_action('wp_enqueue_scripts','wpps-stylesheet');

// Loads Javascript
function wpps-javascript() {
  if ( !is_admin() ) {
    wp_register_script('modernizr', ( get_bloginfo('template_url') . '/js/modernizr.min.js'));
    wp_enqueue_script('modernizr');
    wp_register_script('bootstrap-dropdown', ( get_bloginfo('template_url') . '/assets/bootstrap.min.js'), array('jquery'));
    wp_enqueue_script('bootstrap-dropdown');
    wp_register_script('youtube-resize', ( get_bloginfo('template_url') . '/assets/youtube.resize.js'), array('jquery')); 
    wp_enqueue_script('youtube-resize');
  }
}
add_action('wp_print_scripts','wpps-javascript');

// Loads Google Webfonts
function wpps-webfonts() {
if ( !is_admin() ) {
  wp_register_style('webfonts', 'http://fonts.googleapis.com/css?family=Open+Sans:300,400,600');
  wp_enqueue_style( 'webfonts');
  }
}
add_action('wp_print_styles','wpps-webfonts');