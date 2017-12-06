({
    starClick : function(component, event, helper) {
        var colorOn = component.get("v.colorOn"); 
        var colorOff = component.get("v.colorOff"); 
        var el = event.target;
        console.log(el.getAttribute("d"));
        var rating = 0;
        while (el) {
            rating++;
            el.style.fill = colorOn;
            el = el.previousElementSibling;    		        
        }
        el = event.target.nextElementSibling;
        while (el) {
            el.style.fill = colorOff;
            el = el.nextElementSibling;    		        
        }
        component.set("v.rating", rating);
        //  var myEvent = component.getEvent("change");
        //  myEvent.setParams({"rating": rating});
        //  myEvent.fire();
        
        var action = component.get("c.saveRating");
        action.setParams({
            "numRating": component.get("v.rating")
        });
        action.setCallback(this, function(data) {
            if(data.getState() === "SUCCESS"){
                console.log("success");
            }
            else {
                console.log("error");
            }
        });
        $A.enqueueAction(action);
        
    },
    doInit: function(component, event, helper){
        var action1 = component.get("c.getRating");
        action1.setParams({});
        action1.setCallback(this, function(response){
            if (response.getState() === "SUCCESS"){
                var rating = response.getReturnValue();
                console.log(rating);
                var svg = component.find("svg_content");
                var colorOn = component.get("v.colorOn");
                console.log(svg.getElement().children[0].children[0].children.length);
                while (rating > 0){
                    rating--;
                    svg.getElement().children[0].children[0].children[rating].style.fill = colorOn;
                }
                
            }
            else {
                console.log("error");
            }
        });
        $A.enqueueAction(action1);
    }
})