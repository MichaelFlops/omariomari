if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
    Template.top.rendered = function() {
      clock()
    }
    function clock()
    {
      set=1
      setInterval(function (){
      var dt=new Date()
      var hrs=dt.getHours()
      var tz="AM"
      if (hrs>12)
      {
        hrs=hrs-12
        tz="PM"
      }
      var min=dt.getMinutes()
      var sec=dt.getSeconds()
      $("div b:nth-child(1)").text(hrs)
      $("div b:nth-child(2)").text(min)
      $("div b:nth-child(3)").text(sec)
      $("div b:nth-child(4)").text(tz)
      if (sec==0 && set%2!=0)
      {
        sec=60
      }
      drawClock(hrs*30+(min/2),min*6,sec*6)
      if (sec==60 ||sec==0)
      {
        set++
      }
      },1000)
    }
    function drawClock(hd,md,sd)
    {
      var canvasTag=$("canvas")[0]
      var canvas = canvasTag.getContext("2d");
      canvas.clearRect(0,0,400,400)
      canvas.lineWidth=15;
      //canvas.lineCap="round";
      canvas.strokeStyle="#87D37C";
      canvas.beginPath();
      if (set%2==0)
      {
        canvas.arc(200, 200, 120, 0, sd * Math.PI/180,true);
      }
      else
      {
        canvas.arc(200, 200, 120, 0, sd * Math.PI/180);
      }
      canvas.stroke();
      canvas.closePath();
      canvas.strokeStyle="#4ECDC4";
      canvas.beginPath();
      canvas.arc(200, 200, 100, 0, md * Math.PI/180);
      canvas.stroke();
      canvas.closePath();
      canvas.strokeStyle="#6C7A89";
      canvas.beginPath();
      canvas.arc(200, 200, 80, 0, hd * Math.PI/180);
      canvas.stroke();
    }

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
