import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from '../../../providers/firebase/firebase';
@Component({
  selector: 'page-guideComponent',
  templateUrl: 'guideComponent.html'
})
export class guideComponentPage {
  public myPage: number;
  public description: string;
  public header: string;
  public title:Array<string>;
  public info:Array<string>; 
  items  = []
  constructor(public navCtrl: NavController, 
              public navParams: NavParams , 
              public viewCtrl: ViewController,
              public firebase: FirebaseProvider) {
    this.myPage = this.navParams.get("myPage");
    if(this.myPage == 0){
    this.header = "Body Building";
    this.description = "The process of developing the musculature of the body through specific types of diet and physical exercise, such as weightlifting, especially for competitive exhibition.";
    //the items object
    this.items = [
      { title: "Barebell Curl",
        info: "Take hold of an Olympic bar or a barbell at shoulder width apart. Use an underhand grip. Stand up keeping your torso and back straight, feet together, arms totally extended, and elbows close to the body. Make sure that the barbell does not touch your body. Holding your upper arms stationary, as well as keeping the elbows at your sides and eyes facing forward, curl the weights up. Contract your biceps and continue the movement until the bar is at your shoulder level. Squeeze the biceps at the contracted position, and slowly bring the barbell back to the initial position. Repeat for the desired amount of repetitions."
      },
      { title: "Bench Press",
        info: "Lie on the flat bench with your eyes under the bar. Lift your chest and squeeze your shoulder-blades. Feet flat on the floor. Put your pinky on the ring marks of your bar. Hold the bar in the base of your palm with a full grip and straight wrists. Take a big breath and unrack the bar by straightening your arms. Move the bar over your shoulders with your elbows locked. Lower it to your mid-chest while tucking your elbows 75°. Keep your forearms vertical. Hold your breath at the bottom. Press the bar from your mid-chest to above your shoulders. Keep your butt on the bench. Lock your elbows at the top. Breathe."
      },
      { title: "Dead Lift",
        info: "Walk to the bar. Stand with your mid-foot under the bar. Your shins shouldn’t touch it yet. Put your heels hip-width apart, narrower than on Squats. Point your toes out 15°. Grab the bar. Bend over without bending your legs. Grip the bar narrow, about shoulder-width apart like on the Overhead Press. Your arms must be vertical when looking from the front. Bend your knees. Drop into position by bending your knees until your shins touch the bar. Do NOT let the bar move away from your mid-foot. If it moves, start from scratch with step one. Lift your chest. Straighten your back by raising you chest. Do not change your position – keep the bar over your mid-foot, your shins against the bar, and your hips where they are. Pull. Take a big breath, hold it and stand up with the weight. Keep the bar in contact with your legs while you pull. Don’t shrug or lean back at the top. Lock your hips and knees."
      },
      { title: "Wide-Grip Pullup",
        info: "Grab The Bar. Grip it about shoulder-width apart. Full grip with your palms down. Hang. Raise your feet off the floor by bending your knees. Hang with straight arms. Pull. Pull yourself up by pulling your elbows down to the floor. Keep your elbows close. Pass The bar. Pull yourself all the way up until your chin passes the bar. Don’t do half reps. Repeat. Lower yourself all the way down until your arms are straight. Breathe. Pullup again."
      },
      { title: "Overhead Press",
        info: "Setup. Stand with the bar on your front shoulders. Narrow grip, straight wrists, vertical forearms. Lock your knees and hips. Lift Your Chest. Raise your chest towards the ceiling by arching your upper-back. Try to touch your chin with your upper-chest. Press. Take a big breath, hold it and press the bar in a vertical line. Don’t press it in front or behind your head. Press it over your head. Move Forward. Stay close to the bar while you press the weight up. Shift your torso forward once the bar has passed your forehead. Lockout. Hold the bar over your shoulders and mid-foot for proper balance. Lock your elbows. Shrug your shoulders to the ceiling."
      },
      { title: "Skull Crusher",
        info: "Select your desired weight and sit on the edge of a flat bench. To get into position, lay back and keep the bar close to your chest. Once you are supine, press the weight to lockout. Lower the weights towards your head by unlocking the elbows and allowing the ez bar to drop toward your forehead or just above. Once your forearms reach parallel or just below, reverse the movement by extending the elbows while flexing the triceps to lockout the weight. Repeat for the desired number of repetitions."
      },
      { title: "Stright-leg Deadlift",
        info: "Grasp a bar using an overhand grip (palms facing down). You may need some wrist wraps if using a significant amount of weight. tand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. This is your starting position. Keeping the knees stationary, lower the barbell to over the top of your feet by bending at the waist while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Inhale as you perform this movement. Start bringing your torso up straight again by extending your hips until you are back at the starting position. Exhale as you perform this movement. Repeat for the recommended amount of repetitions."
      },
      { title: "Standing Calf Raise-Wall",
        info: "Stand 6 -12\" away from a wall with your feet hip-width apart and toes facing forward. Place your hands on the wall, shoulder height. Exhale. Slowly rise up on to your toes, lifting your heels off the floor. Keep your knees straight. Do not allow the feet to rotate. Use your hands on the wall to support your balance. Hold the raised position briefly. Inhale and slowly lower your heels back to the floor. From your starting position, bend your left knee to lift your left foot off the floor. Perform single-leg calf raises. Repeat with your right leg."
      },
      { title: "Bent-Over Row",
        info: "Walk to the bar. Stand with your mid-foot under the bar. Don’t touch it with your shins. Medium stance, toes pointing out. Grab the bar. Use a medium grip width. Narrower than on Bench Press, wider than on Deadlifts. Hold the bar low in your hands. Unlock your knees. Keep your hips higher than on the Deadlift. Bend your knees but keep them back so the bar can’t hit them Lift your chest. Straighten your back. Don’t move the bar. Don’t drop your hips. Don’t squeeze your shoulder-blades together. Row. Take a big breath, hold it and pull the bar against your lower chest. Lead with your elbows and pull them to the ceiling."
      }]
    }
    if(this.myPage == 1){
    this.header = "Fitness";
    this.description = "A state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest.";
    //the items object
    this.items = [
      { title: "Cobra",
        info: "Lie on your stomach on an exercise mat or floor with your hands positioned directly under your shoulders and fingers facing forward. Legs should be straight and toes pointed. Gently exhale. Engage your abdominal/core muscles to support the spine. Press your hips into the mat or floor. Lengthen the torso and curl your chest away from the ground while keeping your hips stable. Keep the shoulders rolling down and back. Hold this position for 15 - 30 seconds. Gently lower your upper body back to the mat or floor, lengthening the spine as you descend."
      },
      { title: "Front Plank",
        info: "Lie on your stomach on an exercise mat or floor with your elbows close to your sides and directly under your shoulders, palms down and fingers facing forward. Engage your abdominal/core muscles. It should feel like you are tightening a corset around your ribs, waist and lower torso. Contract your thigh muscles to straighten your legs strongly and flex your ankles, (tucking your toes towards your shins). Slowly lift your torso and thighs off the floor or mat. Keep your torso and legs rigid. Do not allow any sagging in your ribcage or low back. Avoid hiking your hips into the air or bending the knees. Keep the shoulders away from the ears (no shrugging). The shoulders should be directly over your elbows with your palms facing down through the entire exercise. Continue to breathe, keeping the abdominals strong while holding this position. Try holding this position for 5 seconds or more. Keep the torso and legs stiff as you slowly and gently lower your body back towards the mat or floor."
      },
      { title: "Side Lunge",
        info: "Stand with your feet parallel, hip-width apart. Your hands are in a comfortable position to help you maintain your balance during the exercise. Keep your head over your shoulder and your chin tipped and slightly upward. Shift your weight onto your heels. Engage your abdominals to stabilized the spine. Pull the shoulder blades down and back. Try to maintain these engagements throughout the exercise. Inhale and slowly step to the right while keeping your weight into your left heel. Both feet are still facing forward. Once your right foot is firmly placed on the floor, begin to shift your weight toward the right foot, bending the right knee and pushing the hips back. Continue to lunge until your shinbone is vertical to the floor and your right knee is aligned with the second toe of your right foot. Your left leg should be as straight as possible and your body weight should be distributed into the right hip. The heels of both feet should stay flat on the floor. Your arms can be positioned where necessary to help maintain your balance. Exhale and push off firmly with your right foot, returning to starting position. Repeat the movement for the opposite side."
      },
      { title: "Side Plank with bent knee",
        info: "Lie on your right side on an exercise mat with your knees bent and legs stacked one upon the other in a comfortable position. Engage your abdominal/core muscles as you raise your torso coming to support yourself on your right forearm. Your right elbow is bent and should be directly under your shoulder. Your head should be aligned with your spine. Your hips and bottom leg are in contact with the exercise mat. Exhale, keep the abdominals engaged to brace the spine. Your head should be aligned with your spine. Inhale and gently return yourself to your starting position. After a prescribed number of repetitions, repeat on the other side."
      },
      { title: "Superman",
        info: "Lie on your stomach on a mat or the floor with your legs outstretched behind you. Your toes are pointing toward the wall behind you. Reach your arms out overhead with your palms facing each other. Relax your neck and align your head with your spine. Exhale. Deepen your abdominal and core muscles to stabilize your spine and slowly and strongly reach both legs away from your torso until they lift a few inches off the floor. At the same time float both arms a few inches off the floor. Keep both legs and arms straight and allow any rotation in the arms, legs, shoulders or pelvis. Your head is aligned with your spine. Do not allow your head to lift up or to droop toward the floor. Do not allow the back to arch. Hold this position briefly. Gently inhale and lower your legs and arms back to your starting position without any movement in your low back or hips."
      },
      { title: "Push-Up",
        info: "Come to a hands and knees position (quadruped) on the mat with your hands directly under your shoulders; fingers facing forward, or slightly inward and knees under your hips. Engage the abdominals and pull the shoulder blades down your back. Reach one leg out and away followed by the other leg, bringing you to plank position. Keep the abdominals/core engaged to brace the torso. Your head should be aligned with your spine. Your feet are together with your toes tucked under and your heels reaching toward the wall behind you. Slowly bend the elbows, lowering your body toward the floor. Keep the torso rigid and the head aligned with your spine. Do not allow your low back or ribcage to sag or your hips to hike upward. Engage your butt (glutes) and thigh (quadriceps) muscles to help maintain stability and a rigid body. Try to lower yourself until your chest or chin touch the mat or floor. Your elbows should stay close to the sides of your body or be allowed to flare outwards slightly. Press upward through your arms, straightening the elbows. Keep the torso rigid and head aligned with your spine. Imagine pushing the floor away from you. Do not allow your low back to sag or your hips to hike upward."
      },
      { title: "Downward-Facing Dog",
        info: "Come to an all-fours (quadruped) position on the floor mat, with your hands under your shoulders hands fingers facing forward. Engaging your abdominals to support the spine, step back one foot at a time, coming to a push-up position (plank). You hands should remain under your shoulders. Reposition your feet as needed to allow full extension of your body. Do no allow the ribcage or low back to sag toward the floor or the hips to hike up toward the ceiling. Exhale. Shift your weight back toward the wall behind you. This will cause your hips to rise up in the air forming an inverted V position. Your head should be aligned with your spine or slightly tucked. Try not to lift the head. Press your heels toward the floor. If your hamstrings are tight, you may allow a slight bend in the knees. Work toward straight knees, reaching the heels toward the floor. Inhale and return your body to the starting push-up position, maintaining the alignment of all your body segments."
      },
      { title: "Squat Jumps",
        info: "Stand with your feet hip-width apart, arms by your sides. Pull your shoulder blades down and engage your abdominal / core muscles to brace your spine. Shift your hips back and down. This will create a hinge-like movement at your knees. Continue to lower yourself until you feel your heels about to lift off the floor. Try to maintain a flat back by bending forward at the hips. Keep your head directly facing forward and position your arms where they offer the greatest degree of balance support. With ONLY a very brief pause at the bottom of your downward phase, explode up through your lower body, fully extending your hips, knees and ankles. As your jump into the air, try to keep your feet level with each other and parallel with the floor. The most important components of the landing phase are correct foot position and avoiding excessive forward movement in your lower extremity, which places additional stress on your knees. Try to land softly and quietly on the mid-foot, rolling into the heels. Always push your hips back and down to absorb the impact of landing. Do not lock out your knees on your landing. Land with your trunk slightly forward, head aligned with your spine and back rigid or flat. Keep your abdominal / core muscles engaged, bracing your torso to protect your spine."
      },
      { title: "Bent-Knee Sit-up/Crunches",
        info: "Lie on your back on a mat with your knees bent, feet flat on the floor and heels a comfortable distance (12-18\") away from your seat. Place your hands behind your head. Pull your shoulder blades together and your elbows back without arching your low back or causing your ribs to splay out. This elbow position should be maintained throughout the exercise. Your head should be aligned with your spine. Exhale. Engage your abdominal and core muscles. Nod your chin slightly as you slowly curl your head and shoulders off the mat. Pull your rib cage together and toward your pelvis. Keep the neck relaxed. Your feet, tailbone and lower back should remain in contact with the mat at all times. Continue curling up until your upper back is lifted off the mat. Hold this position briefly. Gently inhale and lower your torso back toward the mat slowly and with control. Keep your feet, tailbone and low back in contact with the mat. Proper form is important for this exercise to prevent excessive stress on your low back. Individuals typically perform this movement too rapidly and recruit the hip flexors to assist with the upward phase. Doing this should be avoided as it causes the pelvis to tilt anteriorly, increasing the stress on the low back. The abdominals connect the rib cage to the pelvis so the movement should focus on bringing these two body parts closer together while keeping the neck and shoulders relaxed."
      },
      { title: "Contralateral Limb Raises",
        info: "Lie on your stomach on a mat or the floor with your legs outstretched behind you. Your toes are pointing toward the wall behind you. Reach your arms out overhead with your palms facing each other. Keep your head aligned with your spine. Exhale. Deepen your abdominal/core muscles to stabilize your spine and slowly float one arm a few inches off the floor. Keep your arm straight and try not to rotate your arm or shoulder. Your head and torso should not move, avoid any arching in your back. Do not lift your chin or lower your head. Hold this position briefly. Gently inhale and lower your arm back towards your starting position without any movement in your low back or hips."
      }]
    }
    if(this.myPage == 2){
    this.header = "Callisthenics";
    this.description = "Refers to exercises that are done in a rhythmic, systematic way using the body weight for resistance. The purpose of calisthenics is simple - To help you build strength, endurance and flexibility with no equipment needed.";
    //the items object
    this.items = [
      { title: "Burpee",
        info: "Begin in a standing position with your legs at shoulder width. Drop into a squat position with your hands on the ground. Extend both your feet back into a push up position. Perform a push up. Return to the squat position in one quick motion. Return to standing position and jump straight in the air."
      },
      { title: "Butt Burner",
        info: "Get on all fours and tighten your abdominals. Keep your hands and elbows aligned with your shoulders, and your knees directly aligned with your hips. Slowly raise your left knee to the side and lengthen the leg straight back. Bend the knee, slowly pull your leg back in, and return it to the starting position."
      },
      { title: "Elbow Plank",
        info: "Rest on your forearms, elbows and knees. Lift your knees off the ground by keeping your legs and back straight. You should be resting onto your toes and  your elbows. Contract your abdominals to keep yourself up and prevent your booty from sticking up. Hold as long as you can. Aim for 20 to 30 seconds in the beginning and work your way up to at least one minute, as you get stronger."
      },
      { title: "Front Lever",
        info: "Assume an inverted hang position on a pull-up bar or gym rings. Lower the body slowly down until completely horizontal (your body facing upwards). Maintain the hold as long as good form will allow."
      },
      { title: "Superman Push-up",
        info: "Requires explosive strength. Start in the regular push-up position, with your hands at shoulder width. Go down, explode upward and throw your hands out forward, as though you are Superman flying through the air. Once your arms are up in the air, pull up your back legs as well, so that your body is completely airborne and parallel with the ground."
      },
      { title: "T-Push Up",
        info: "Start with your hands at shoulder width in the standard push-up position Push yourself up and lift one arm from the floor and raise it towards the ceiling whilst twisting your upper body to the side. Return to the starting position with both hands on the floor. Repeat this and alternate left and right each time you push yourself up."
      },
      { title: "Clapping Push-Up",
        info: "Start in a regular push-up position with your arms at shoulder width. Lower yourself to the ground until your chest almost hits the ground. Push yourself up with explosive strength. Aim to get yourself as far off of the ground as you can. Your hands should leave the ground for one or two seconds, so clap your hands before landing."
      },
      { title: "Pike Push-Up",
        info: "Start in a downward dog position. Lower yourself down as far as possible so that your forehead nearly touches the floor. Keep your abs tight and your shoulders pulled back. Push yourself back up in the starting position."
      }]
    }
    if(this.myPage == 3){
    this.header = "Alternative Exercise";
    this.description = "This is a term used to represent any and all alternatives to focusing of exercising for that sake of fitness - this includes and and all hobbies that can promote healthy physical development";
    //the items object
    this.items = [
      { title: "Hiking",
        info: "Hiking is a fantastic workout for burning calories and building muscles and often times you can even forget completely that you are technically exercising. Hiking builds multiple components of fitness simultaneously, predominantly cardiovascular health and strength – especially of the lower body."
      },
      { title: "Jogging",
        info: "Both running and jogging are forms of aerobic exercise. Aerobic means 'with oxygen' – the term 'aerobic exercise' means any physical activity that produces energy by combining oxygen with blood glucose or body fat."
      },
      { title: "Surfing",
        info: "You are moving large muscle groups enough to elevate your oxygen consumption during the paddling portions, and also while carrying your board up the beach, running out into the surf, and to some extent while shifting your weight on the board. It's also a great core workout. In holding your upper body forward of your legs and in an extended position, you work the deepest abdominal support muscles necessary to transfer forces from your feet up through your arms."
      },
      { title: "Yoga",
        info: "Practicing yoga changes your mind: It changes the way you approach life, your body, and eating. Yoga shows you how to appreciate your body for all of the amazing things that it can do for you and points you in the direction of wanting to fill your body with the best possible fuel rather than processed junk food. And changing your mind about your body and the foods you feed it will be a much more effective weight-loss tool than burning a bunch of calories in an aggressive kick-boxing class and then mindlessly plowing through equal or more calories later that day."
      }]
    }
  }
  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
}
