"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ScanLine, ArrowLeft, Camera, Cpu, Activity, Utensils, 
  Wallet, Sparkles, BellRing, Apple, CheckCircle2, TrendingUp, Info
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Fresh Food Kitchen" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/95 via-secondary-dark/80 to-transparent z-10" />
        </div>

        <div className="container mx-auto px-4 relative z-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              قبل أن ترميه... <br />
              <span className="text-gold">دع الذكاء يعرف قيمته</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-medium"
            >
              حل ذكي لتحليل منتجاتك الغذائية، ومعرفة حالتها واقتراح أفضل طريقة للاستفادة منها باستخدام الذكاء الاصطناعي.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/scanner" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-lg hover:scale-105">
                <ScanLine className="w-5 h-5" />
                افحص منتجك الآن
              </Link>
              <Link href="#how-it-works" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 hover:scale-105">
                كيف يعمل ثمر؟
              </Link>
            </motion.div>
          </div>

          {/* Floating Example Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:block relative"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl w-80 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center border border-white/10">
                  <span className="text-3xl text-white font-black">T</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">طماطم</h3>
                  <p className="text-gold-light text-sm font-medium">تم الفحص قبل قليل</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-gray-300 text-sm mb-1">الحالة التحليلية</p>
                  <p className="font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> قابلة للاستخدام
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-gray-300 text-sm mb-1">الاقتراح الذكي</p>
                  <p className="font-medium text-white leading-snug">استخدمها اليوم للطبخ أو حضّر بها صلصة طازجة لتخزينها.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Green Banner */}
      <section className="bg-secondary text-white py-8 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center gap-3">
              <Activity className="w-6 h-6 text-primary" />
              <span className="font-bold">نقلل هدر الطعام</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Wallet className="w-6 h-6 text-primary" />
              <span className="font-bold">نوفر لك المال</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span className="font-bold">قرارات غذائية أفضل</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Utensils className="w-6 h-6 text-primary" />
              <span className="font-bold">نستفيد من كل منتج</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">كيف يعمل ثمر؟</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">خطوات بسيطة وسريعة لتحليل منتجاتك واستخراج أفضل قيمة منها.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gray-100 z-0"></div>
            
            {[
              { title: "صوّر المنتج", icon: <Camera className="w-8 h-8" /> },
              { title: "يحلل الذكاء الاصطناعي الصورة", icon: <Cpu className="w-8 h-8" /> },
              { title: "يحدد حالة المنتج واقتراحاته", icon: <Activity className="w-8 h-8" /> },
              { title: "تحصل على أفضل طريقة للاستفادة", icon: <Sparkles className="w-8 h-8" /> },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex-1 flex flex-col items-center text-center relative z-10 w-full"
              >
                <div className="w-24 h-24 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-primary mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold border-4 border-white">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-secondary max-w-[150px]">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">أكثر من فحص... قيمة حقيقية</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              ثمر AI يساعدك على فهم منتجاتك الغذائية بشكل أفضل ويقدم لك توصيات ذكية وسهلة لتتخذ القرار الصحيح.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">تحليل المنتج بالذكاء الاصطناعي</h3>
              <p className="text-gray-600 leading-relaxed">معرفة حالة المنتج بدقة، واكتشاف علامات التلف المبكرة، وإمكانية استخدامه بأمان.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6">
                <Utensils className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">اقتراحات ذكية للوصفات</h3>
              <p className="text-gray-600 leading-relaxed">الحصول على أفكار مبتكرة ومناسبة لتحضير وجبات شهية من المكونات المتوفرة لديك قبل تلفها.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-danger/10 rounded-2xl flex items-center justify-center text-danger mb-6">
                <BellRing className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">تنبيهات الصلاحية</h3>
              <p className="text-gray-600 leading-relaxed">متابعة المنتجات الحساسة وتجنب فقدانها من خلال تحديد الوقت المثالي لاستهلاكها.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">أفضل طريقة للاستفادة</h3>
              <p className="text-gray-600 leading-relaxed">اقتراحات مخصصة توضح لك ما إذا كان يجب استخدام المنتج فوراً، أو حفظه بطريقة معينة لتمديد عمره.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">تحليلات حقيقية</h2>
              <p className="text-gray-500 mt-2">كيف يتعامل الذكاء الاصطناعي مع مختلف أنواع الأطعمة</p>
            </div>
            <Link href="/scanner" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
              جرب الفحص بنفسك <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "طماطم", condition: "ناضجة جداً", score: 85, suggest: "تحضير صلصة معكرونة طازجة", icon: <Apple className="w-10 h-10 text-red-500" /> },
              { name: "خبز فرنسي", condition: "بداية جفاف", score: 60, suggest: "تحميصه لصنع قطع الكروتون للحساء", icon: <Utensils className="w-10 h-10 text-amber-600" /> },
              { name: "موز", condition: "بقع بنية", score: 75, suggest: "ممتاز لصنع خبز الموز أو عصير", icon: <TrendingUp className="w-10 h-10 text-yellow-500" /> },
              { name: "خس ورقي", condition: "ذبول خفيف", score: 50, suggest: "نقعه في ماء مثلج ليعود مقرمشاً", icon: <Activity className="w-10 h-10 text-green-500" /> },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all group"
              >
                <div className="h-32 bg-gray-50 flex items-center justify-center border-b border-gray-100 group-hover:bg-primary/5 transition-colors">
                  {item.icon}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-secondary mb-4">{item.name}</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">الحالة</span>
                      <span className="font-bold text-secondary">{item.condition}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">نتيجة الفحص</span>
                      <span className="font-bold text-primary">{item.score}%</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <p className="text-xs font-bold text-primary mb-1 flex items-center gap-1">
                      <Info className="w-3 h-3" /> الاقتراح الذكي
                    </p>
                    <p className="text-secondary text-sm font-medium leading-relaxed">{item.suggest}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/scanner" className="inline-flex items-center gap-2 text-white bg-primary px-6 py-3 rounded-full font-bold">
              جرب الفحص بنفسك <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
