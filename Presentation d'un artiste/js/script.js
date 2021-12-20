/* Code jQuery pour TP Présenter Un Artiste */
/* Dernière révision le 05/07/2021 */
/* Fabien Cazayous */

// Appel de la fonction jQuery "Accordion" appliquée sur l'élément HTML "myAccordeon" (footer)
$( function() {
    var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#myAccordeon" ).accordion({
        active: false,
        heightStyle: "content",
        collapsible: true,
        icons: icons
    });
    
    $( "#toggle" ).button().on( "click", function() {
    if ( $( "#myAccordeon" ).accordion( "option", "icons" ) ) {
        $( "#myAccordeon" ).accordion( "option", "icons", null );
    } else {
        $( "#myAccordeon" ).accordion( "option", "icons", icons );
    }
    });
});

$( function() {
    $( "#tabs" ).tabs();
} );