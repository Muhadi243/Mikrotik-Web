<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mikrotik_academy' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NlW&A5e4>b4fB(XS,6%vAFHg<NjVfc+D2uFLir[#J)<4JSw>3YkXh[gYIr#w6=[<' );
define( 'SECURE_AUTH_KEY',  'kGAv,* =#4y4sN${9,x>8V0?Wf[!*a{5]tJRL}+=IAtS?A#BtZB,s0)o(UNC^Q y' );
define( 'LOGGED_IN_KEY',    'Xa!@?w19Aa7PROv->,}:YQ+9#;;m)K5C+T0A=rpJJP]_hOhbr(ZZ(-A`hUH@YnAu' );
define( 'NONCE_KEY',        '>_C%QB+w+F@ c;bxlc!ymUuIU~e]D7Mc QlB3oLFd&9?XX7+fgrh<?0ZG/(7^7T7' );
define( 'AUTH_SALT',        '^GU-8F{.RE(kI<5= QLdc^NL^R&>zQZOEEEAq3uoD,5:@CLM~$GKw5%}k!qLn8H*' );
define( 'SECURE_AUTH_SALT', 'Kp;0R[uGFE9/&=B.p8tC#*>(A$P27XeP@xbbB$.xVzDvGNk2D18I.<kw6,X:Whv;' );
define( 'LOGGED_IN_SALT',   '1t*4&cRWRFTvC=Ng3U0_XF#TH`:|- x}TO74{-&w>U__n8gaQmj_oUVAqT}:a4F2' );
define( 'NONCE_SALT',       'l]:V4u]WtL2@w5;F}$S?Drv>_^RIij}&[dnE9DajL7oCm:R`i@W2@!6BT{ec[A[K' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
