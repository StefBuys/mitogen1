import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { ExercisePage } from '../exercise/exercise';
import {FirebaseProvider} from "../../../providers/firebase/firebase";

@Component({
  selector: 'page-exerciseComponent',
  templateUrl: 'exerciseComponent.html'
})
export class exerciseComponentPage {
  //Testing
  public Title:string[] = [];
  public Machine:string[] = [];
  //Created Variables
  practise: any;
  public activity: string;
  public myPage: number;
  public selected: number;
  public output: string;
  public date = new Date().toLocaleDateString();
  public descriptionTitle: string = "Welcome:";
  public descriptionInfo: string = "Please select on of the above - Push[Chest, Shoulders, Triceps] - Pull[Back, Biceps, Forearms] - Legs[Calves, Abs, Glutes] - Other[AMRAP, HIIT]";
  public header: string = "Add Exercise";
  public myObs = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController,
              public firebase: FirebaseProvider) {
    this.myPage = this.navParams.get("myPage");
    this.practise = this.firebase.getPractiseList();
  }

  display(): void{
    this.myObs = [];
    for (let i in this.Title) {
      var input = {title: this.Title[i], machine: this.Machine[i]};
      this.myObs.push(input);
    }
  }
/////////////////////DB
  openButton(i){
    var entry = i;
    //add it to DB
    if (entry.machine.length>1) {
      //this.navCtrl.push(ExercisePage, {value: entry.title +" - "+ entry.machine});
      this.activity = entry.title+" - "+entry.machine;
    } else {
      //this.navCtrl.push(ExercisePage, {value: entry.title});
      this.activity = entry.title;
    }
    var input:any = {date: this.date, activity: this.activity};
    this.practise.push(input);
    this.btnReturn();
  }
  //Button Methods
  btnAbs(): void{
    this.selected = 0;
    this.descriptionTitle = "Abs";
    this.descriptionInfo = "The rectus abdominis muscle, also known as the 'abdominals' or 'abs', is a paired muscle running vertically on each side of the anterior wall of the human abdomen. The rectus abdominis is an important postural muscle. It is responsible for flexing the lumbar spine, as when doing a so-called 'crunch' sit up. The rib cage is brought up to where the pelvis is when the pelvis is fixed, or the pelvis can be brought towards the rib cage (posterior pelvic tilt) when the rib cage is fixed, such as in a leg-hip raise.";
    this.Title =   ["Ab Rollout","Air Bike","Crunch","Crunch","Crunch","Crunch","Decline Oblique Crunch","Internal Rotation","Leg Raise","Plank","Side Bend","Side Crunch","Side Plank","Side Plank Oblique Crunch","Sit-Up","Superman"];
    this.Machine = [" "," "," ","Ball","Cross Body","Decline","Decline","","","","Dumbbell","Ball","","","",""];
    this.display();
  }
  btnBack(): void{
    this.selected = 1;
    this.descriptionTitle = "Back";
    this.descriptionInfo = "Location: The muscles in your upper- and mid-back help stabilize your shoulder joints. Back muscles are divided into two specific groups: the extrinsic muscles that are associated with upper extremity and shoulder movement, and the intrinsic muscles that deal with movements of the vertebral column. Back exercises are also great for targeting your arm muscles.";
    this.Title =   ["Bent Arm Pull-Over","Bent-Over Row","Chin-Up","Deadlift","Deadlift","Deadlift","Good-Morning","Good-Morning","Hyperextension","Inverted Row","Lat Pulldown","Lat Pulldown","Lat Pulldown","Lat Pulldown","One Arm Row","Pull-Over","Pull-Over","Pull-Over","Pull-Up","Pull-Up","Pullover","Push-Down","Seated Row","Side to Side Pull-Up","T-Bar Row"];
    this.Machine = ["Dumbbell","","","Barbell","Dumbbell","Smith","","Smith","","","","Close Grip","Reverse Grip","V-Bar","Dumbbell","Barbell","Exercise Ball","Wide Grip","","V-Bar","Dumbbell","Straight Arm","Cable","",""];
    this.display();
  }
  btnBiceps(): void{
    this.selected = 2;
    this.descriptionTitle = "Biceps";
    this.descriptionInfo = "The biceps is a muscle on the front part of the upper arm. The biceps includes a “short head” and a “long head” that work as a single muscle. The biceps is attached to the arm bones by tough connective tissues called tendons. The tendons that connect the biceps muscle to the shoulder joint in two places are called the proximal biceps tendons. The tendon that attaches the biceps muscle to the forearm bones (radius and ulna) is called the distal biceps tendon. When the biceps contracts, it pulls the forearm up and rotates it outward";
    this.Title =   ["Concentration Curl","Curl","Curl","Curl","Curl","Curl","Drag Curl","Hammer Curl","Hammer Curl","Hammer Curl","High Cable Curl","Lying Incline Curl","Lying Incline Curl","One Legged Bicep Curl","Preacher Curl","Preacher Curl","Preacher Curl","Reverse Curl","Spider Curl"];
    this.Machine = ["","Barbell","Cable","Dumbbell","EZ-Bar","Machine","","","Alternate","Cable","","Barbell","Dumbell","","Barbell","Cable","Dumbbell","",""];
    this.display();
  }
  btnCalves(): void{
    this.selected = 3;
    this.descriptionTitle = "Calves";
    this.descriptionInfo = "The calf muscle, on the back of the lower leg, is actually made up of two muscles. The gastrocnemius is the larger calf muscle, forming the bulge visible beneath the skin. The gastrocnemius has two parts or 'heads', which together create its diamond shape. The soleus is a smaller, flat muscle that lies underneath the gastrocnemius muscle.";
    this.Title =   ["Donkey Calf Raise","Seated Calf Raise","Standing Calf Raise","Standing Calf Raise"];
    this.Machine = ["","","Barbell","Machine"];
    this.display();
  }
  btnChest(): void{
    this.selected = 4;
    this.descriptionTitle = "Chest";
    this.descriptionInfo = "The chest is part of a larger group of “pushing muscles” found in the upper body. The chest, as part of this group, enables you to perform pushing actions such as the barbell bench press or a daily activity such as moving a heavy dresser.";
    this.Title =   ["Bench Fly","Bench Press","Bench Press","Bench Press","Bench Press","Bench Press","Bent-Over Crossover","Chest Press","Crossover","Decline Bench Press","Decline Bench Press","Decline Bench Press","Decline Fly","Floor Press","Fly","Fly","Fly","Front Raise Pullover","Hammer Grip Incline Bench","Incline Bench Press","Incline Bench Press","Incline Chest Press","Incline Fly","Incline Fly","Incline Fly w/ Twist","Incline Press","Neck Press","Pull-Up","Push-Up","Push-Up"];
    this.Machine = ["One Arm","Bands","Barbell","Dumbell","One Arm","Smith","Cable","Machine","Cable","Barbell","Dumbbell","Machine","Dumbbell","One Arm","Cable","Dumbell","Machine","Barbell","","Barbell","Dumbbell","Machine","Cable","Dumbbell","Dumbbell","","Neutral Grip","","Bosu","Close Hands"];
    this.display();
  }
  btnForearms(): void{
    this.selected = 5;
    this.descriptionTitle = "Forearms";
    this.descriptionInfo = "Upper limb, forearm semi-pronated. The forearm is the part of the upper limb between the elbow and the wrist. Forearm-specific training is the recommended way to fully fatigue the various muscles of the forearm and ensure they're worked through the entire range of motion.";
    this.Title =   ["Farmer's Walk","Reverse Wrist Curl","Reverse Wrist Curl","Wrist Curl","Wrist Curl"];
    this.Machine = ["","Barbell","Dumbbell","Barbell","Dumbbell"];
    this.display();
  }
  btnGlutes(): void{
    this.selected = 6;
    this.descriptionTitle = "Glutes";
    this.descriptionInfo = "The gluteal muscles are a group of three muscles which make up the buttocks: the gluteus maximus, gluteus medius and gluteus minimus. The gluteus maximus is the largest and most superficial of the three gluteal muscles. It makes up a large portion of the shape and appearance of the hips.";
    this.Title =   ["Bridge","Bridge","Flutter Kicks","Glute March","Hip Thrust","Kettlebell Swing","Kick-Back","Leg Lift","Side Lying Clam","Side Lying Hip Abduction"];
    this.Machine = ["","Single Leg","","","Barbell","","","One Leg","",""];
    this.display();
  }
  btnLegs(): void{
    this.selected = 7;
    this.descriptionTitle = "Legs";
    this.descriptionInfo = "The majority of muscles in the leg are considered long muscles, in that they stretch great distances. The muscles that make up the quadriceps are the strongest and leanest of all muscles in the body. These four muscles at the front of the thigh are the major extensors (help to extend the leg straight) of the knee. The hamstrings are three muscles at the back of the thigh that affect hip and knee movement. They begin under the gluteus maximus behind the hipbone and attach to the tibia at the knee.";
    this.Title =   ["Bench Squat","Bench Squat","Bulgarian Split Squat","Front Squat","Goblet Squat","Hack Squat","Hack Squat","Hack Squat","Hip Abduction","Iron Cross","Jefferson Squat","Leg Curl","Leg Curl","Leg Curl","Leg Extension","Leg Press","Leg Press","Lunge","Lunge","Power Clean","Rear Lunge","Romanian Deadlift","Single Leg Deadlift","Sissy Squat","Squat","Squat","Squat","Squat","Squat","Step Up","Step Up","Thigh Abductor","Thigh Abductor","Zercher Squat"];
    this.Machine = ["Barbell","Dumbbell","","","","","Machine","Smith","","","","Lying","Seated","Standing","","","Narrow Stance","Barbell","Dumbbell","","Barbell","","","","Barbell","Dumbell","Machine","One Leg","Side Split","Barbell","Dumbbell","","",""];
    this.display();
  }
  btnShoulders(): void{
    this.selected = 8;
    this.descriptionTitle = "Shoulders";
    this.descriptionInfo = "The muscles of the shoulder bridge the transitions from the torso into the head/neck area and into the upper extremities of the arms and hands. The shoulder (or humeroscapular) joint is formed by the articulation of the head of the humerus with the scapula. It is a ball-and-socket joint and the most freely movable joint in the body. Although three ligaments protect and surround the shoulder joint, most of its stability comes from the powerful muscles and tendons of the rotator cuff. The rotator cuff consists of four muscles: supraspinatus, infraspinatus, subscapularis, and teres minor.";
    this.Title =   ["Arnold Press","Cuban Press","Front Raise","Front Raise","Front Raise","Lateral Raise","One Arm Snatch","Raise","Rear Deltoid Row","Rear Deltoid Row","Reverse Fly","Reverse Fly","Reverse Fly Bent","Reverse Fly Bent","Reverse Fly Lying","Shoulder Press","Shoulder Press","Shoulder Press","Shoulder Press","Shrug","Shrug","Shrug","Shrug","Upright Row","Upright Row","Upright Row","Upright Row","Upright Row"];
    this.Machine = ["","","Barbell","Cable","Dumbbell","","","Dumbbell","Barbell","Smith","Cable","One Arm","Cable","Dumbbell","Dumbbell","Barbell","Dumbbell","Machine","Standing","Barbell","Cable","Dumbbell","Smith","Barbell","Cable","Dumbell","One Arm","Smith"];
    this.display();
  }
  btnTriceps(): void{
    this.selected = 9;
    this.descriptionTitle = "Triceps";
    this.descriptionInfo = "The triceps brachii is a major muscle of the upper arm in the human body. The triceps run along the humerus (the main bone of the upper arm) between the shoulder and the elbow. Along with the biceps, it enables extension and retraction of the forearm. When the triceps are contracted, the forearm extends and the elbow straightens; if the triceps are relaxed and the biceps flexed, the forearm retracts and the elbow bends. The triceps also serve to stabilize the shoulder joint at the top of the humerus.";
    this.Title =   ["Bench Press","Concentration Extension","Dip","Dip","Dip","Overhead Extension","Overhead Extension","Push-Down","Push-Down","Tricep Extension","Tricep Kickback","Tricep Extension","Tricep Extension","Tricep Extension","Tricep Extension","Tricep Extension","Tricep Extension Kneeling"];
    this.Machine = ["Close Grip","","","Bench","Machine","Seated","Standing","","Rope","Dumbbell","","Barbell","Cable","Dumbbell, Across Face","Dumbell, Incline","Machine","Cable"];
    this.display();
  }
  btnAMRAP(): void{
    this.selected = 10;
    this.descriptionTitle = "AMRAP";
    this.descriptionInfo = "AMRAP is defined as an abbreviation that means 'as many reps as possible', meaning to do a circuit of exercises as many times as possible within a specific period of time.";
    this.Title =   ["Bodyweight AMRAP","CINDY","HERO WOD 'DANNY'","TEN MINUTE AMRAP","SIMPLE AND DEADLY","CHRISTINA","JASON KHALIPA's AMRAP","AN AMRAP FROM RICH FRONING","Endurance AMRAP","Crossfit Open AMRAP Workout 15.1"];
    this.Machine = ["10 min, 10 Push-Ups, 15 Air-Squats, 20 Crunches","20 min, 5 Pull-Ups, 10 Push-Ups, 15 Air Squats","20 min, 30 Box jumps, 20 Push Press, 30 Pull-Ups","10 min, 25 Mountain Climber, 5 Squat Cleans, 10 Wall Balls","15 min, 10 Burpees, 25 High Knees","20 min, 9 Pull-Ups, 9 Cleans, 9 Kettlebell Swings, 9 Toes-to-bar, 9 Push Press, 9 Burpees","20 min, 15 Squat, 15 Push-Ups, 15 Sit-Ups","7 min, 9 Front-Squats, 7 Burpees, 5 Shoulder to Overhead","10 min Sprint, 5 Burpees, 10m Sprint","9 min AMRAP, 15 toes-to-bar, 10 Deadlift, 5 Snatches"];
    this.display();
  }
  btnHIIT(): void{
    this.selected = 11;
    this.descriptionTitle = "HIIT";
    this.descriptionInfo = "High-intensity interval training (HIIT), also called high-intensity intermittent exercise (HIIE) or sprint interval training (SIT), is a form of interval training, a cardiovascular exercise strategy alternating short periods of intense anaerobic exercise with less intense recovery periods.";
    this.Title =   ["Touch Toes","Lunges","Side Lunges","Butt Kicks","High Knees","Arm Circles","Trunk Twists","Side Bends"];
    this.Machine = ["15 reps","10 reps","10 reps - each direction","25 yards","25 yards","20 reps","20 reps","20 reps"];
    this.display();
  }
  //Return Button
  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
}