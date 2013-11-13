$( function() {

	/**
	 * Elemente cachen.
	 */
	var	$slider = $( '.slider' ),
		$slidePrev = $slider.find( '.slider-prev' ),
		$slideNext = $slider.find( '.slider-next' ),
		$galleryItems = $slider.find( '.gallery-item' ),
		galleryItemCount = $galleryItems.length,
		$currentItem = $slider.find( '.current' ),
		currentId = $currentItem.data( 'slide-id' );

	/**
	 * Klick auf linken Pfeil.
	 */
	$slidePrev.on( 'click', function() {

		// Prüfen, ob links noch Bilder sind.
		if ( currentId === 1 )
			return;

		// Counter runterzählen.
		currentId--;

		// Vorheriges Element holen.
		var $prevItem = $currentItem.prev( '.gallery-item' );

		// Aktuelles Elemen ausblenden.
		$currentItem.fadeTo( 250, 0, function() {
			// Ausgeblendetes Element auf `display:none` setzen und `.current`
			// Klasse entfernen
			$currentItem.hide().removeClass( 'current' );

			// Vorheriges Element einblenden.
			$prevItem.fadeTo( 500, 1, function() {
				// Eingeblendetes Element `.current` Klasse
				// geben.
				$prevItem.addClass( 'current' );

				// Aktuelles Element ersetzen.
				$currentItem = $prevItem;
			} );
		} );

	} );

	/**
	 * Klick auf rechten Pfeil.
	 */
	$slideNext.on( 'click', function() {

		// Prüfen, ob rechts noch Bilder sind.
		if ( currentId === galleryItemCount )
			return;

		// Counter hochzählen.
		currentId++;

		// Nächstes Element holen.
		var $nextItem = $currentItem.next( '.gallery-item' );

		// Aktuelles Elemen ausblenden.
		$currentItem.fadeTo( 500, 0, function() {
			// Ausgeblendetes Element auf `display:none` setzen und `.current`
			// Klasse entfernen.
			$currentItem.hide().removeClass( 'current' );

			// Nächstes Element einblenden.
			$nextItem.fadeTo( 250, 1, function() {
				// Eingeblendetes Element `.current` Klasse
				// geben.
				$nextItem.addClass( 'current' );

				// Aktuelles Element ersetzen.
				$currentItem = $nextItem;
			} );
		} );

	} );

} );
