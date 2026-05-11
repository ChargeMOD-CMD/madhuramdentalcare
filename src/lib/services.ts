import { Stethoscope, Sparkles, Cog, Smile, ShieldCheck, Activity, Crown, Wand2, Scissors, Brush, HeartPulse, Layers } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: typeof Stethoscope;
  category: "General" | "Cosmetic" | "Advanced";
};

export const services: Service[] = [
  { title: "Dental Check-up", description: "Comprehensive oral exam with digital imaging and AI-assisted insights.", icon: Stethoscope, category: "General" },
  { title: "Teeth Cleaning", description: "Ultrasonic scaling and polishing for a healthy, radiant smile.", icon: Brush, category: "General" },
  { title: "Tooth Extraction", description: "Painless precision extractions using modern micro-techniques.", icon: Scissors, category: "General" },
  { title: "Fillings & Restorations", description: "Tooth-colored, durable restorations matched to your enamel.", icon: Layers, category: "General" },
  { title: "Gum Care", description: "Periodontal therapy that protects the foundation of your smile.", icon: ShieldCheck, category: "General" },

  { title: "Teeth Whitening", description: "LED-activated cosmetic whitening — up to 8 shades brighter.", icon: Sparkles, category: "Cosmetic" },
  { title: "Smile Design", description: "Personalized digital smile makeover engineered around your face.", icon: Smile, category: "Cosmetic" },
  { title: "Dental Veneers", description: "Ultra-thin porcelain veneers for a flawless red-carpet smile.", icon: Wand2, category: "Cosmetic" },
  { title: "Cosmetic Correction", description: "Reshape, recontour and refine — subtle artistry, lasting beauty.", icon: HeartPulse, category: "Cosmetic" },

  { title: "Root Canal Treatment", description: "Single-sitting endodontics with rotary precision instruments.", icon: Activity, category: "Advanced" },
  { title: "Dental Implants", description: "3D-guided titanium implants with lifetime smile assurance.", icon: Cog, category: "Advanced" },
  { title: "Braces & Aligners", description: "Invisible aligners and modern orthodontics for every age.", icon: Layers, category: "Advanced" },
  { title: "Crowns & Bridges", description: "Premium zirconia crowns crafted for strength and aesthetics.", icon: Crown, category: "Advanced" },
];
