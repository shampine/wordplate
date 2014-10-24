<?php
function wpps_stylesheet() {
  if (!is_admin()) {
    wp_register_style('screen', ( get_bloginfo('template_url') . '/css/screen.css'));
    wp_enqueue_style('screen');
  }
}
add_action('wp_enqueue_scripts','wpps_stylesheet');

// Loads Javascript
function wpps_javascript() {
  if (!is_admin()) {
    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js', false, null, true);
    wp_enqueue_script('main', get_bloginfo('template_directory') . '/js/main.js', array('jquery'), null, true);
  }
}
add_action('wp_print_scripts','wpps_javascript');

// Loads Google Webfonts
function wpps_webfonts() {
  if (!is_admin()) {
    wp_register_style('webfonts', 'http://fonts.googleapis.com/css?family=Open+Sans:300,400');
    wp_enqueue_style( 'webfonts');
  }
}
add_action('wp_print_styles','wpps_webfonts');

// Removes manifest/rsd/shortlink from wp_head
remove_action( 'wp_head', 'wlwmanifest_link');
remove_action( 'wp_head', 'rsd_link');
remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0 );
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
remove_action( 'wp_head', 'wp_generator');
remove_action( 'wp_head', 'feed_links' );
remove_action( 'wp_head', 'feed_links', 2 );
remove_action( 'wp_head', 'feed_links_extra', 3 );

// Adds post thumbnails to theme
add_theme_support( 'post-thumbnails' );

// Removes ul class from wp_nav_menu
function remove_ul ( $menu ){
  return preg_replace( array( '#^<ul[^>]*>#', '#</ul>$#' ), '', $menu );
}
add_filter( 'wp_nav_menu', 'remove_ul' );

// Add socket.io snippet to enable Browser Sync
if($environment['name'] == 'local') {
  function add_browser_sync() {
    echo '
      <script type=\'text/javascript\'>//<![CDATA[
          document.write("<script async src=\'//HOST:3000/browser-sync/browser-sync-client.1.5.8.js\'><\/script>".replace(/HOST/g, location.hostname).replace(/PORT/g, location.port));
      //]]></script>
    ';
  }
  add_action('wp_footer','add_browser_sync');
}