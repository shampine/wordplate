<?php

// Password protect staging environments
if( WP_PASSWORD_PROTECT == true ){
  function password_protect() {
    if ( !is_user_logged_in() ) {
      auth_redirect();
    }
  }
  add_action ('template_redirect', 'password_protect');
}

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
      <script type=\'text/javascript\' id="__bs_script__">//<![CDATA[
          document.write("<script async src=\'http://HOST:3000/browser-sync/browser-sync-client.2.7.1.js\'><\/script>".replace("HOST", location.hostname));
      //]]></script>
    ';
  }
  add_action('wp_footer','add_browser_sync');
}
