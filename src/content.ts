import { IndexData } from "./pages";
import { AboutData } from "./pages/about";
import { ServicesData } from "./pages/services";

export const index_data: IndexData = {
   heroImage: "images/heba-hero.jpg",
   heroImageMobile: "images/heba-hero-mobile.jpg",
   headline: "I HELP YOU ENJOY YOUR FOOD WHILE REACHING YOUR GOAL PHYSIQUE!",
   jobTitle: "Nutrition Coach",
   otherTitles: ["Body Building Specialist", "Biochemist", "Great Cook!"],
   introSummary:
      "<p>I am a Nutrition Coach certified in Biochemistry, Nutrition, and Body Building</p><p>I am passionate about helping people in reaching their health & physique goals through well programmed training & nutritional plans specifically tailored to their goals.</p><p><strong>I Adovcate Food Love Not Fear of Food!</strong></p>",
   certifications: [
      {
         badge: "images/issa.gif",
         title: "Certified Sports Nutritionist",
      },
      {
         badge: "images/issa.gif",
         title: "Certified Body Building Specialist",
      },
      {
         badge: "images/issa.gif",
         title: "Certified Personal Trainer",
      },
      {
         badge: "images/clean-health.png",
         title: "Certified Nutritionist",
      },
   ],
   introImages: ["images/landing/heba-1.jpg", "images/landing/heba-2.jpg", "images/landing/heba-3.jpg"],
   services: [
      {
         image: "images/clients/nutrition.jpg",
         summary:
            "Being Busy with your work or your studies to filling your head with all nutritional misconceptions, I will work with you to clear those misconceptions & build a customized plan that matches your busy schedule, and create recipes to enjoy eating guilt-free while reaching your goal!.",
         title: "1:1 Nutrtional Coaching",
      },
      {
         image: "images/clients/workout.jpg",
         summary:
            "Want to build glutes & show off your curves? I will provide different workout guides that focuses on building muscles & mathces your fitnes level. these workout plans will be tailored based on your goals, your fitness level and your schedule.",
         title: "Online Workout Plan",
      },
   ],
   testimonials: [
      {
         body: "Sylvie helped me see that I was heading for burnout at a breakneck pace. I needed to slow down and start taking better care of myself, because my business was paying the consequences. I couldn't focus, I had no clue what direction I was going, and I hated sitting down to work. With Sylvie's guidance.",
         from: "Abdel Rahman",
      },
      {
         body: "food choices, get enough sleep, and move my body everyday. As a result, my business has never been better. I work hard and love every minute of it, instead of dreading work days.",
         from: "Hanin",
      },
   ],
   blogCategories: [
      { title: "Nutrition", image: "images/blog/nutrition.jpg" },
      { title: "Workouts", image: "images/blog/workout.jpg" },
   ],
};

export const services_data: ServicesData = {
   header: {
      headerImage: "images/header-1.jpg",
      headline: "Change your life",
      subheadline: "(... And Health Habits)",
   },
   introBlock: {
      headline: "Feeling hopeless because you've tried everything?",
      subheadline: "let's make sure it never happens to you!",
      p1: "Commodo enim fugiat enim voluptate ex consequat sint nulla nulla nulla. Exercitation cupidatat ipsum mollit pariatur duis. Ullamco ex aute in fugiat ad consequat cupidatat veniam aliquip. Amet excepteur fugiat mollit nulla incididunt tempor veniam. Proident dolore incididunt ad est quis fugiat commodo sit sit nostrud. Id reprehenderit officia officia aute duis eu culpa culpa magna ex incididunt ex irure.",
      p2: "Proident sint voluptate voluptate commodo excepteur laborum. Esse consectetur nulla reprehenderit officia cillum enim dolore voluptate excepteur. Lorem dolor irure incididunt est in enim in nulla laboris aliquip excepteur cillum nisi reprehenderit.",
   },
   services: [
      {
         title: "1:1 Nutrtional Coaching",
         subtitle: "HEALTH, WELLNESS, & SELF-CARE COACHING",
         path: "/one-to-one-nutritional-coaching",
         summary:
            "Being Busy with your work or your studies to filling your head with all nutritional misconceptions, I will work with you to clear those misconceptions & build a customized plan that matches your busy schedule, and create recipes to enjoy eating guilt-free while reaching your goal!.",
         image: "images/clients/nutrition.jpg",
      },
      {
         title: "Workout Plans",
         subtitle: "HEALTH, WELLNESS, & SELF-CARE COACHING",
         path: "/workout-plans",
         summary:
            "Want to build glutes & show off your curves? I will provide different workout guides that focuses on building muscles & mathces your fitnes level. these workout plans will be tailored based on your goals, your fitness level and your schedule.",
         image: "images/clients/workout.jpg",
      },
   ],
};

export const about_data: AboutData = {
   header: {
      headerImage: "images/header-1.jpg",
      headline: "Change your life",
      subheadline: "(... And Health Habits)",
   },
   intro: {
      headline: "Why Do I Coach Online?",
      subheadline: "BECAUSE IT'S FRIGGIN' IMPORTANT.",
      body: "If you you're looking for a coach to answer your questions within seconds. lay out a long term progress path for you, keep you accountable in exceeding on it, constant motivation and be there for you for any nessecary changes to be made to ensure you keep progressing towards your goals; having an online coach is worth the consideration",
      image: "sadas",
   },
   story: {
      headline: "Why Do I Coach Online?",
      subheadline: "BECAUSE IT'S FRIGGIN' IMPORTANT.",
      body: "If you you're looking for a coach to answer your questions within seconds. lay out a long term progress path for you, keep you accountable in exceeding on it, constant motivation and be there for you for any nessecary changes to be made to ensure you keep progressing towards your goals; having an online coach is worth the consideration",
   },
};
