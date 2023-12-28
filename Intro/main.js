
// basic object : tweens
gsap.to(".logo",{duration:2,x:300,backgroundColor:"#560563",borderRadius:"20%",border:
"5px solid green",ease:"expo"}); // to animate an object (selector object and configuration object)

// ease:"elastic" // for spring like effect
// ease:"bounce" // for bounce effect
//various other options from ease visualizor

//animate logo1 and logo1 around their centers
gsap.set(".logo1,.logo2",{transformOrigin: "50% 50%"});

gsap.to(".logo1,.logo2",{duration:20,rotation:360}) //rotating values

//NOTE : gsap.to ==> animates from intial state to the specified animation
// While gsap.from ==> animates from specified animation to intial state

gsap.from('.from_test',{duration:2,opacity:0,scale:0.3,ease:"back"});

//animating multiple objects with offset or delay (stagger)
// gsap.from(".circle",{duration:1,opacity:0,y:150,stagger:0.35});

//NOTE : we can also provide functions that return a value
// gsap.from('.random_offset',{duration:3,opacity:0,scale:5,y:()=>Math.random()* 400 - 200})

//we can also use random utility function
gsap.from('.random_offset',{duration:3,opacity:0,scale:5,y:'random(-200,200)'})


// #### CONTROL METHODS : to play with tweens

const tween = gsap.from(".circle",{duration:3,opacity:0,y:150,stagger:0.35});

document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#progress").onclick = () => {
    tween.progress(0.2); sequenceUpdateDragger();
}

/// ### timeline for sequencing and controlling multiple tweens (animations)
// var tl = gsap.timeline({repeat:2}); //repeats twice
var tl = gsap.timeline({repeat:2,yoyo:true}); //yoyo make animation go back and forth

tl.from(".timeline_test1",{duration:2.5,opacity:0,scale:0.3,ease:"bounce"})
tl.from(".timeline_test2",{duration:2.5,opacity:0,scale:0.3,ease:"bounce"},"+=2") // _+=2 is position attribute
//the +=2 (position attribute) is used to tell where animation will be place (2sec after first tween)

// we can also add a label to other timelines to use it as a refernce to other tweens
var til2 = gsap.timeline();
tl.to(".timeline_label1",{duration:3,x:150});
tl.addLabel("circlesOutro","+=1");
tl.from(".timeline_label2",{duration:3,x:150},"circlesOutro");
  