  $(function(){
 
    var container = $('.container');
 
    container.imagesLoaded( function(){
      container.masonry({
        itemSelector : '.item',
        columnWidth: function(containerWidth) {
            return containerWidth / 3;
        },
        isAnimated: true,
        animationOptions: {
            duration: 300
        }
      });
    });

  });