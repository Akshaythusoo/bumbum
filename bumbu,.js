
     function onKeyDown(event)
     {
      var maxPoint=new Point(view.size.width ,view.size.height);
      var randomPoint= point.random();
      var point = maxPoint * randomPoint;

      new Path.Circle(point,10).fillColor="orange";
     }   



