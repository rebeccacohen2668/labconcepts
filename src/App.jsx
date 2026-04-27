import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, CheckCircle, XCircle, ArrowLeft, RotateCcw, Award, Lightbulb, Trophy, Star, BrainCircuit } from 'lucide-react';

const scenarios = [
  {
    id: 1,
    title: "ניסוי 1: צמח מים (אלודאה) ואור",
    illustration: "🌿💡",
    colors: {
      border: "border-emerald-500",
      bgLight: "bg-emerald-50",
      text: "text-emerald-800",
      bgIcon: "bg-emerald-100",
      hover: "hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-emerald-200"
    },
    studyMaterial: "משתנה בלתי תלוי (הגורם המשפיע) הוא מה שהחוקר משנה במכוון. משתנה תלוי (הגורם המושפע) הוא התהליך הביולוגי הנבדק. מכיוון שלעתים קשה למדוד את התהליך ישירות, אנו משתמשים ב'דרך מדידה' (למשל ספירת בועות). גורמים קבועים הם כל שאר התנאים שחייבים להישאר זהים כדי שנדע שרק המשתנה הבלתי תלוי השפיע.",
    description: "תלמידים רצו לבדוק את תהליך הפוטוסינתזה בצמח מים מסוג אלודאה. הם הניחו את הצמח בכוס כימי עם מים, והציבו מנורה במרחקים שונים מהכוס (10 ס\"מ, 20 ס\"מ, 30 ס\"מ, 40 ס\"מ). בכל מרחק, הם ספרו את מספר בועות החמצן שנפלטו מהצמח במשך 5 דקות. טמפרטורת המים נשמרה קבועה לאורך כל הניסוי.",
    questions: [
      {
        question: "מהו המשתנה הבלתי תלוי (הגורם המשפיע) בניסוי?",
        options: [
          "קצב תהליך הפוטוסינתזה של הצמח",
          "מספר בועות החמצן שנפלטו בצמח",
          "עוצמת האור (המרחק מהמנורה)",
          "סוג צמח המים (אלודאה ירוקה)"
        ],
        correct: 2,
        explanation: "המשתנה הבלתי תלוי הוא הגורם שהחוקר משנה במכוון, ובמקרה זה - עוצמת האור (שנקבעת על ידי המרחק מהמנורה). לא רושמים רק את האובייקט 'צמח'."
      },
      {
        question: "מהו המשתנה התלוי (הגורם המושפע) בניסוי?",
        options: [
          "קצב תהליך הפוטוסינתזה של הצמח",
          "מספר בועות החמצן שנפלטו בצמח",
          "טמפרטורת המים בכוס לאורך זמן",
          "מרחק המנורה מהצמח בסנטימטרים"
        ],
        correct: 0,
        explanation: "המשתנה התלוי הוא התהליך הביולוגי הנבדק - קצב הפוטוסינתזה. שימו לב: מספר הבועות זו רק דרך המדידה, לא המשתנה עצמו!"
      },
      {
        question: "מהי דרך המדידה של המשתנה התלוי בניסוי זה?",
        options: [
          "מדידת כמות הפחמן הדו-חמצני הנפלט",
          "ספירת מספר בועות החמצן ב-5 דקות",
          "מדידת אורך צמח המים בסנטימטרים",
          "בדיקת טמפרטורת המים בעזרת מדחום"
        ],
        correct: 1,
        explanation: "כפי שמצוין במצגת, במקרים רבים אין אפשרות למדוד ישירות את התהליך, ולכן מודדים גורם אחר המבטא את השינוי - פליטת החמצן הנראית כבועות."
      },
      {
        question: "מדוע היה חשוב לשמור על טמפרטורת מים קבועה לאורך הניסוי?",
        options: [
          "כדי שהצמח לא ימות מחום המנורה במהלך הניסוי.",
          "זהו גורם קבוע, המוודא שרק עוצמת האור תשפיע.",
          "זוהי בקרה שנועדה להוכיח שהאור הוא הגורם היחיד.",
          "זהו מהלך שנועד להגדיל את מהימנות תוצאות הניסוי."
        ],
        correct: 1,
        explanation: "טמפרטורה היא גורם קבוע. חובה לשמור עליה קבועה (ולא לשנות אותה) כדי להבטיח שרק המשתנה הבלתי תלוי (האור) משפיע על התוצאות, שכן טמפרטורה יכולה להשפיע בעצמה על קצב הפעילות."
      },
      {
        question: "מהו ההסבר הביולוגי להשפעת הטמפרטורה על קצב התהליכים הנבדקים (כמו פוטוסינתזה)?",
        options: [
          "טמפרטורה מהווה משתנה בלתי תלוי בניסוי, וככל שהיא עולה הצמח קולט יותר אור וגדל מהר יותר.",
          "עליית טמפרטורה מאיצה פעילות אנזימים עד לשיא, אך חום יתר גורם להרס מבנם (דנטורציה) וירידה בקצב.",
          "טמפרטורה נמוכה גורמת להרס מבנה האנזים (דנטורציה), אך טמפרטורות גבוהות שומרות על מבנה תקין ויציב.",
          "טמפרטורה קבועה מבטיחה שקצב הפוטוסינתזה לא ישתנה, מה שמאפשר לבודד את האור כגורם היחיד במערכת."
        ],
        correct: 1,
        explanation: "בסיס ביולוגי מדעי: תהליכים ביולוגיים מזורזים על ידי אנזימים. עלייה בטמפרטורה מאיצה תנועת מולקולות (מפגש אנזים-סובסטרט) עד לנקודת המקסימום. מעבר לנקודה זו, החום גורם לדנטורציה (הרס המבנה המרחבי של האנזים) וקצב התהליך צונח."
      }
    ]
  },
  {
    id: 2,
    title: "ניסוי 2: שמרים ונשימה תאית",
    illustration: "🎈🦠",
    colors: {
      border: "border-orange-500",
      bgLight: "bg-orange-50",
      text: "text-orange-800",
      bgIcon: "bg-orange-100",
      hover: "hover:border-orange-400 hover:bg-orange-50 hover:shadow-orange-200"
    },
    studyMaterial: "שאלת חקר טובה תמיד בודקת קשר (מהי השפעת המשתנה הבלתי תלוי על המשתנה התלוי?). השערה מנוסחת כמשפט 'אם/ככל ש... אז...'. חזרות בניסוי (ריבוי פריטים באותו טיפול) הן קריטיות כדי לוודא שהתוצאות אינן מקריות, להקטין השפעת תוצאות חריגות ולאפשר חישוב ממוצע אמין.",
    description: "בניסוי נבדקה השפעת ריכוז הגלוקוז על קצב הנשימה התאית (תסיסה) בשמרים. החוקרים הכינו 4 מערכות ניסוי, ובכל אחת 3 מבחנות. לכל מבחנה הוכנסה כמות זהה של תרחיף שמרים, אך ריכוז הגלוקוז היה שונה (0%, 2%, 4%, 6%). לכל מבחנה חובר בלון, ולאחר 20 דקות נמדד נפח הפחמן הדו-חמצני (CO2) שהצטבר בבלון.",
    questions: [
      {
        question: "מהי שאלת חקר תקנית לניסוי זה?",
        options: [
          "איך ריכוז הגלוקוז השונה משפיע על השמרים?",
          "מהי השפעת ריכוז הגלוקוז על קצב הנשימה התאית?",
          "למה שמרים צריכים גלוקוז כדי לבצע נשימה תאית?",
          "האם שמרים יפלטו יותר גז בריכוז הגלוקוז של 6%?"
        ],
        correct: 1,
        explanation: "שאלת חקר טובה כוללת את המשתנה הבלתי תלוי (ריכוז גלוקוז) והמשתנה התלוי (קצב נשימה תאית), ושואלת על הקשר ביניהם. היא לא מתחילה ב'איך' או 'למה'."
      },
      {
        question: "נסחו השערה לניסוי. איזו מההשערות הבאות מנוסחת נכון על פי הכללים?",
        options: [
          "אני משער שבריכוז הגבוה ביותר ייפלט הכי הרבה גז.",
          "יתכן שככל שריכוז הגלוקוז יעלה, קצב התסיסה ירד.",
          "ככל שריכוז הגלוקוז יעלה, כך קצב הנשימה התאית יגבר.",
          "לדעתי גלוקוז משפיע על קצב פליטת הגז של השמרים."
        ],
        correct: 2,
        explanation: "השערה צריכה להיות מנוסחת כמשפט של 'אם/ככל ש... אז/כך...', ללא מילות ספק (אולי, יתכן, אני משער), וללא מתן הסברים ביולוגיים בתוכה."
      },
      {
        question: "מדוע הכינו החוקרים 3 מבחנות עבור כל ריכוז של גלוקוז?",
        options: [
          "אלו הן בקרות להוכחה שהשינוי חל בגלל הגלוקוז.",
          "אלו חזרות שנועדו לוודא שהתוצאות אינן מקריות.",
          "פעולה זו נועדה לספק מספיק גז לניפוח הבלונים.",
          "הדבר מאפשר לבדוק שלושה סוגים שונים של שמרים."
        ],
        correct: 1,
        explanation: "ריבוי פריטים באותו טיפול (3 מבחנות לכל ריכוז) נקרא 'חזרות' (חזרות ביולוגיות). מטרתן לוודא שהתוצאות אינן מקריות, להקטין השפעה של תוצאות חריגות ולאפשר חישוב ממוצע."
      }
    ]
  },
  {
    id: 3,
    title: "זיהוי בקרות בניסוי השמרים",
    illustration: "🧪🚫",
    colors: {
      border: "border-red-500",
      bgLight: "bg-red-50",
      text: "text-red-800",
      bgIcon: "bg-red-100",
      hover: "hover:border-red-400 hover:bg-red-50 hover:shadow-red-200"
    },
    studyMaterial: "בקרות הן חובה בכל ניסוי כדי לשלול הסברים חלופיים! 'בקרה ללא המשתנה הבלתי תלוי' נועדה להוכיח שרק הגורם ששינינו יצר את התוצאה. 'בקרה ללא האורגניזם' נועדה לשלול את האפשרות שהתופעה שראינו קרתה בגלל תגובה כימית ספונטנית במערכת, ולא בגלל תהליך ביולוגי אמיתי.",
    description: "בהמשך לניסוי השמרים הקודם (בדיקת קצב נשימה תאית), החוקרים הוסיפו למערכת הניסוי קבוצת מבחנות נוספת: מבחנות שהכילו גלוקוז בריכוז 4% ומים, אך ללא שמרים. גם למבחנות אלו חיברו בלון והמתינו 20 דקות.",
    questions: [
      {
        question: "מהו סוג הבקרה במבחנות אלו ומה מטרתה?",
        options: [
          "בקרה השוואתית - השוואה בין סוגי גלוקוז שונים.",
          "חזרה טכנית - כדי לוודא שאין פגם בבלונים עצמם.",
          "בקרה ללא המשתנה הבלתי תלוי - להראות השפעתו.",
          "בקרה ללא האורגניזם - לשלול תגובה כימית ספונטנית."
        ],
        correct: 3,
        explanation: "זוהי 'בקרה ללא אורגניזם'. לפי המצגת, היא מאפשרת לענות על השאלה האם הסיבה לתופעה הנמדדת (פליטת הגז) נובעת מתהליך ביולוגי ולא מתגובה כימית ספונטנית במערכת עצמה."
      }
    ]
  },
  {
    id: 4,
    title: "ניסוי 4: דיסקיות עלים צפות",
    illustration: "🍃💧",
    colors: {
      border: "border-cyan-500",
      bgLight: "bg-cyan-50",
      text: "text-cyan-800",
      bgIcon: "bg-cyan-100",
      hover: "hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-cyan-200"
    },
    studyMaterial: "זכרו תמיד את כלל הברזל: תהליך ביולוגי אינו תמיד גלוי לעין! לא ניתן לראות 'קצב פוטוסינתזה' בעין, ולכן חייבים למצוא דרך עקיפה למדוד אותו. בניסוי זה, הצטברות גז החמצן (שהוא תוצר של התהליך) מהווה מצוף זעיר ודרך המדידה שלנו תהיה מעקב אחר זמן הציפה.",
    description: "תלמידים רצו לבדוק את קצב הפוטוסינתזה בעזרת שיטת \"דיסקיות עלים צפות\". הם קרצו 10 עיגולים (דיסקיות) מעלים של תרד, שאבו מהן את האוויר כדי שישקעו, והכניסו אותן לכוסות במצבי תאורה שונים. התמיסה הכילה פחמן דו-חמצני זמין לצמח. הם בדקו במשך 15 דקות כמה דיסקיות צפו בחזרה למעלה בכל כוס.",
    questions: [
      {
        question: "מדוע דיסקיות העלים צפות בחזרה לפני הנוזל לאחר זמן מה תחת האור?",
        options: [
          "בגלל שהן מתייבשות במים ומשקלן הסגולי במים יורד.",
          "בתהליך הפוטוסינתזה נוצר חמצן המצטבר וגורם לציפה.",
          "האור מחמם את המים וגורם לזרמים שמעלים את העלים.",
          "הצמח מבצע נשימה תאית ופולט פחמן דו-חמצני בלבד."
        ],
        correct: 1,
        explanation: "בתהליך הפוטוסינתזה, הדיסקית (שקולטת אור ופחמן דו חמצני) מפיקה גז חמצן. בועות החמצן מצטברות בחללי האוויר שבעלה ומהוות מצופים זעירים שגורמים לדיסקית לעלות לפני המים."
      },
      {
        question: "מהי דרך המדידה של המשתנה התלוי בניסוי זה?",
        options: [
          "קצב תהליך הפוטוסינתזה של דיסקיות עלי התרד.",
          "מספר הדיסקיות שנותרו בתחתית הכוס לאחר שעתיים.",
          "מספר הדיסקיות שצפו תוך 15 דקות (זמן הציפה).",
          "עוצמת האור אליה נחשפו הכוסות במהלך כל הניסוי."
        ],
        correct: 2,
        explanation: "המשתנה התלוי הוא 'קצב הפוטוסינתזה', אך לא ניתן למדוד אותו ישירות. לכן, דרך המדידה שנבחרה כאן היא מעקב אחר זמן הציפה / מספר הדיסקיות שצפו."
      }
    ]
  },
  {
    id: 5,
    title: "ניסוי 5: פירוק מי חמצן על ידי קטלאז",
    illustration: "🥔🧪",
    colors: {
      border: "border-blue-500",
      bgLight: "bg-blue-50",
      text: "text-blue-800",
      bgIcon: "bg-blue-100",
      hover: "hover:border-blue-400 hover:bg-blue-50 hover:shadow-blue-200"
    },
    studyMaterial: "סיכום משתנים: לעולם אל תרשמו כאובייקט רק 'אנזים' או 'צמח'. המשתנה הוא הריכוז שלו, הכמות שלו וכו'. המשתנה התלוי הוא תמיד תהליך ('קצב פעילות האנזים') ולא רק כלי המדידה ('סרגל' או 'גובה קצף').",
    description: "תלמידים רצו לבדוק את השפעת ריכוז האנזים קטלאז (ממיצוי תפוח אדמה) על קצב פירוק מי חמצן. הם הכינו מערכות עם ריכוזים שונים של מיצוי (10%, 20%, 30%, 40%, 50%), בעוד כמות מי החמצן נשמרה קבועה. לאחר 5 דקות, נמדד גובה הקצף שנוצר במבחנה כתוצאה מפליטת גז החמצן.",
    questions: [
      {
        question: "מהו המשתנה הבלתי תלוי (הגורם המשפיע) בניסוי זה?",
        options: [
          "קצב הפעילות של האנזים קטלאז במבחנות הניסוי",
          "ריכוז מיצוי תפוח האדמה (המייצג את ריכוז האנזים)",
          "גובה הקצף במבחנה לאחר המתנה של חמש דקות",
          "נפח מי החמצן הקבוע שהוכנסו לכל אחת מהמבחנות"
        ],
        correct: 1,
        explanation: "המשתנה הבלתי תלוי הוא הגורם שאותו החוקר משנה באופן יזום במערכת כדי לבדוק את השפעתו - במקרה זה, ריכוז המיצוי (המייצג את ריכוז האנזים)."
      },
      {
        question: "מהו המשתנה התלוי ומהי דרך המדידה שלו בניסוי זה?",
        options: [
          "המשתנה התלוי הוא גובה הקצף, ודרך המדידה היא קצב הפעילות האנזימטית.",
          "המשתנה התלוי הוא כמות מי החמצן, ודרך המדידה היא אורך הסרגל המודד.",
          "המשתנה התלוי הוא קצב פירוק מי החמצן, ודרך המדידה היא גובה הקצף.",
          "המשתנה התלוי הוא ריכוז האנזים במבחנה, ודרך המדידה היא זמן ההמתנה."
        ],
        correct: 2,
        explanation: "המשתנה התלוי הוא התהליך הביולוגי (קצב פירוק מי החמצן). מכיוון שקשה למדוד זאת ישירות, מודדים את גובה הקצף שמעיד על כך."
      },
      {
        question: "איזה גרף יתאים להצגת הקשר בין ריכוז המיצוי לגובה הקצף ומדוע?",
        options: [
          "גרף קו רציף, משום שריכוז המיצוי הוא משתנה רציף ויש ערך למדדי ביניים.",
          "גרף עמודות, משום שריכוז המיצוי הוא משתנה בדיד ואין לו ערך למדדי ביניים.",
          "גרף פיזור, משום שריכוז המיצוי הוא משתנה איכותי ואין ערך למדדי ביניים.",
          "גרף עוגה, משום שריכוז המיצוי הוא משתנה זמני ויש בו ערך למדדי ביניים."
        ],
        correct: 0,
        explanation: "אחוז הריכוז (10%, 20%...) הוא משתנה רציף (למשל, קיימת משמעות לריכוז של 15%), ולכן מתאים להציגו באמצעות קו רציף במערכת צירים XY."
      }
    ]
  },
  {
    id: 6,
    title: "ניסוי 6: ניתוח תוצאות - קטלאז",
    illustration: "📈🔬",
    colors: {
      border: "border-pink-500",
      bgLight: "bg-pink-50",
      text: "text-pink-800",
      bgIcon: "bg-pink-100",
      hover: "hover:border-pink-400 hover:bg-pink-50 hover:shadow-pink-200"
    },
    studyMaterial: "יש להבחין בבירור בין 3 מושגים: 1. תיאור התוצאות: תיאור יבש של מגמות העקומה (ללא פרשנות). 2. הסבר (בסיס ביולוגי): ההיגיון המדעי מאחורי התוצאות ('מצב רוויה של אנזים'). 3. מסקנה: שורת המחץ שמסכמת את הקשר הכללי שנלמד מהניסוי.",
    description: "חוקרים המשיכו את ניסוי הקטלאז והרחיבו את טווח הריכוזים עד ל-100%. שרטטו גרף המראה את הקשר בין ריכוז המיצוי לגובה הקצף. התבוננו היטב בגרף וענו על השאלות.",
    extraContent: () => (
      <div className="my-2 sm:my-3 bg-slate-50 p-2 sm:p-3 border border-slate-200 rounded-lg shadow-inner overflow-hidden max-w-full">
        <h4 className="text-center font-bold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base px-1">השפעת ריכוז מיצוי תפוח אדמה על גובה הקצף</h4>
        <div className="w-full overflow-x-auto flex justify-center">
          <svg viewBox="0 0 450 200" className="w-full h-auto min-w-[260px] max-w-sm">
             {/* Axes */}
             <line x1="60" y1="160" x2="420" y2="160" stroke="#64748b" strokeWidth="2"/>
             <line x1="60" y1="20" x2="60" y2="160" stroke="#64748b" strokeWidth="2"/>
             
             {/* Grid lines */}
             {[2,4,6,8,10].map(y => (
               <line key={y} x1="55" y1={160 - (y*13)} x2="420" y2={160 - (y*13)} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4"/>
             ))}
             
             {/* Line */}
             <polyline points="60,160 120,134 180,108 240,82 300,56 360,56 420,56" fill="none" stroke="#ec4899" strokeWidth="2.5"/>
             
             {/* Points */}
             {[
               [60,160], [120,134], [180,108], [240,82], [300,56], [360,56], [420,56]
             ].map((pt, i) => (
               <circle key={i} cx={pt[0]} cy={pt[1]} r="4" fill="#be185d" />
             ))}

             {/* X Labels */}
             <text x="60" y="178" textAnchor="middle" fontSize="10" fill="#475569">0%</text>
             <text x="120" y="178" textAnchor="middle" fontSize="10" fill="#475569">20%</text>
             <text x="180" y="178" textAnchor="middle" fontSize="10" fill="#475569">40%</text>
             <text x="240" y="178" textAnchor="middle" fontSize="10" fill="#475569">60%</text>
             <text x="300" y="178" textAnchor="middle" fontSize="10" fill="#475569">80%</text>
             <text x="360" y="178" textAnchor="middle" fontSize="10" fill="#475569">100%</text>
             <text x="240" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">ריכוז מיצוי תפוח אדמה</text>

             {/* Y Labels */}
             <text x="45" y="163" textAnchor="end" fontSize="10" fill="#475569">0</text>
             <text x="45" y="137" textAnchor="end" fontSize="10" fill="#475569">2</text>
             <text x="45" y="111" textAnchor="end" fontSize="10" fill="#475569">4</text>
             <text x="45" y="85" textAnchor="end" fontSize="10" fill="#475569">6</text>
             <text x="45" y="59" textAnchor="end" fontSize="10" fill="#475569">8</text>
             <text x="15" y="90" textAnchor="middle" transform="rotate(-90 15,90)" fontSize="11" fontWeight="bold" fill="#334155">גובה קצף (ס"מ)</text>
          </svg>
        </div>
      </div>
    ),
    questions: [
      {
        question: "איזה מהמשפטים הבאים מתאים להיות 'תיאור התוצאות' של הניסוי?",
        options: [
          "הקטלאז מפרק מי חמצן במהירות רבה יותר ככל שריכוזו עולה, עד שהוא מגיע לרוויה.",
          "מריכוז 10% עד 80% חלה עלייה בגובה הקצף, ומריכוז 80% עד 100% גובה הקצף נשאר קבוע.",
          "רמת הפעילות של האנזים קטלאז מגיעה לשיא בריכוז של 80% בגלל חוסר בסובסטרט זמין.",
          "ככל שריכוז האנזים במיצוי גבוה יותר, כך גובה הקצף הנוצר יהיה גבוה יותר בהתאמה."
        ],
        correct: 1,
        explanation: "תיאור תוצאות חייב להיות מילולי ו'יבש', ללא פרשנות או מסקנות. הוא צריך פשוט לתאר את המגמות בגרף (עלייה/ירידה/התיישרות) ואת הערכים הרלוונטיים, בדיוק כפי שמוצג בתשובה זו."
      },
      {
        question: "איזה מהמשפטים הבאים מתאים להיות 'הסבר / בסיס ביולוגי' לתוצאות בחלק שבו הגרף התיישר?",
        options: [
          "בחלקה השני של העקומה (מריכוז 80% עד 100%) לא נצפתה שום עלייה נוספת בגובה הקצף במבחנות.",
          "הגרף התיישר לחלוטין משום שמריכוז 80% ומעלה, גובה הקצף נשאר זהה לחלוטין בכל המבחנות השונות.",
          "מריכוז 80%, כל מולקולות מי החמצן (הסובסטרט) קשורות לאנזים (רוויה), ולכן הקצב אינו עולה.",
          "המסקנה הסופית שלנו היא שהוספת עוד מיצוי מעבר ל-80% אינה משפיעה יותר על תהליך יצירת הקצף."
        ],
        correct: 2,
        explanation: "הסבר מציג את הסיבה הביולוגית/כימית למה שראינו בתוצאות. במקרה זה, 'מצב רוויה' של הסובסטרט מסביר מדוע הוספת עוד אנזים לא מגבירה את קצב הפירוק."
      },
      {
        question: "איזו מההיגדים הבאים מתאים ביותר לשמש כ'מסקנה' סופית מניסוי זה?",
        options: [
          "האנזים קטלאז נמצא בריכוז גבוה במיוחד בתוך תפוחי אדמה, ולכן הוא זה שמפרק את מי החמצן ביעילות.",
          "נצפתה מגמה ברורה שבה גובה הקצף עלה מריכוז 10% עד 80%, ולאחר מכן הוא נשאר קבוע עד ריכוז 100%.",
          "ככל שריכוז האנזים במיצוי עולה כך קצב הפירוק יעלה, עד להגעה לנקודת רוויה של הסובסטרט במערכת.",
          "חייבים לשמור על טמפרטורה קבועה לאורך הניסוי כדי שהאנזים קטלאז לא יעבור דנטורציה וייהרס לגמרי."
        ],
        correct: 2,
        explanation: "מסקנה לוקחת את התוצאות ומכלילה אותן לכדי קביעה רחבה יותר לגבי הקשר בין המשתנים שהוגדרו מראש (ריכוז אנזים מול קצב פירוק), כולל ההתייחסות למגבלה (רוויה)."
      }
    ]
  },
  {
    id: 7,
    title: "כללים: בניית טבלאות וגרפים",
    illustration: "📊",
    colors: {
      border: "border-purple-500",
      bgLight: "bg-purple-50",
      text: "text-purple-800",
      bgIcon: "bg-purple-100",
      hover: "hover:border-purple-400 hover:bg-purple-50 hover:shadow-purple-200"
    },
    studyMaterial: "מיקום המשתנים: הבלתי תלוי תמיד על ציר ה-X, והתלוי (או דרך המדידה) על ציר ה-Y. אם המשתנה הבלתי תלוי הוא 'רציף' (כמו טמפרטורה, זמן - יש משמעות לערך ביניים כמו 15.5) נבחר בגרף קו רציף. אם המשתנה 'בדיד / איכותי' (סוג ירק - אין ערך ביניים בין בטטה לתירס) נבחר בגרף עמודות.",
    description: "לאחר איסוף התוצאות מהניסויים, עלינו להציג אותן בצורה מאורגנת. על פי הכללים של פרופסור חקר, קיימים עקרונות ברורים לבניית טבלה וגרף תקינים ולבחירת סוג הגרף המתאים.",
    questions: [
      {
        question: "בעת שרטוט גרף, היכן עלינו למקם את המשתנים?",
        options: [
          "המשתנה הבלתי תלוי ימוקם על ציר ה-X, והמשתנה התלוי (או דרך המדידה) ימוקם על ציר ה-Y.",
          "המשתנה התלוי (או דרך המדידה) ימוקם על ציר ה-X, והמשתנה הבלתי תלוי ימוקם על ציר ה-Y.",
          "המשתנה בעל הערכים הרציפים ימוקם על ציר ה-X, והמשתנה בעל הערכים הבדידים ימוקם על ציר ה-Y.",
          "המשתנה בעל המספרים הגדולים ימוקם על ציר ה-X, והמשתנה בעל המספרים הקטנים ימוקם על ציר ה-Y."
        ],
        correct: 0,
        explanation: "כלל ברזל בהצגה גרפית: המשתנה הבלתי תלוי (הגורם המשפיע שינינו) תמיד על ציר ה-X האופקי, והמשתנה התלוי (או דרך המדידה) תמיד על ציר ה-Y האנכי."
      },
      {
        question: "חוקר בדק את השפעתן של טמפרטורות שונות (10, 20, 30, 40 מעלות) על קצב פליטת החמצן. איזה סוג גרף יתאים ביותר ומדוע?",
        options: [
          "גרף קו רציף, משום שהמשתנה הבלתי תלוי (טמפרטורה) הוא רציף ויש ערך למדדי ביניים.",
          "גרף עמודות, משום שהמשתנה הבלתי תלוי (טמפרטורה) הוא בדיד ואין ערך למדדי ביניים.",
          "גרף פיזור, משום שהמשתנה הבלתי תלוי (טמפרטורה) אינו כמותי ואין לו מדדי ביניים.",
          "גרף עוגה, משום שהמשתנה הבלתי תלוי (טמפרטורה) הוא יחסי ואין בו ערך למדדי ביניים."
        ],
        correct: 0,
        explanation: "הגרף המתאים הוא גרף קו רציף. הנימוק: המשתנה הבלתי תלוי (טמפרטורה) והמשתנה התלוי (קצב פליטת חמצן) הם רציפים ויש ערך למדדי ביניים (למשל, יש משמעות לטמפרטורה של 15 או 25 מעלות)."
      },
      {
        question: "חוקר בדק את כמות העמילן ב-3 סוגים של ירקות: תפוח אדמה, בטטה ותירס. איזה גרף עליו לבחור ומדוע?",
        options: [
          "גרף עמודות, משום שהמשתנה הבלתי תלוי (סוג הירק) הוא בדיד ואין ערך למדדי ביניים.",
          "גרף קו רציף, משום שהמשתנה הבלתי תלוי (סוג הירק) הוא רציף ויש ערך למדדי ביניים.",
          "גרף פיזור, משום שהמשתנה הבלתי תלוי (סוג הירק) הוא כמותי ואין ערך למדדי ביניים.",
          "גרף עוגה, משום שהמשתנה הבלתי תלוי (סוג הירק) הוא המשכי ויש ערך למדדי ביניים."
        ],
        correct: 0,
        explanation: "הגרף המתאים הוא גרף עמודות. הנימוק: המשתנה הבלתי תלוי (סוג הירק) הוא איכותי/בדיד - אין שום ערך ביניים אפשרי בין 'תפוח אדמה' לבין 'בטטה'."
      }
    ]
  }
];

export default function App() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  const questionAreaRef = useRef(null);
  const descriptionAreaRef = useRef(null);

  const scenario = scenarios[currentScenarioIndex];
  const question = scenario?.questions[currentQuestionIndex];
  const totalQuestions = scenarios.reduce((total, sc) => total + sc.questions.length, 0);

  const currentGlobalQuestion = scenarios.slice(0, currentScenarioIndex).reduce((acc, curr) => acc + curr.questions.length, 0) + currentQuestionIndex + 1;
  const progressPercentage = (currentGlobalQuestion / totalQuestions) * 100;
  
  const currentScore100 = Math.round((correctAnswersCount / totalQuestions) * 100);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleAnswerClick = (index) => {
    if (showExplanation) return; 
    
    setSelectedOption(index);
    setShowExplanation(true);
    
    if (index === question.correct) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  };

  const scrollToTop = () => {
      // גלילה טבעית למעלה במסכים קטנים (מובייל)
      if (window.innerWidth < 1024) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
          // במסכי מחשב - גלילה של כל אזור בנפרד
          if (questionAreaRef.current) {
              questionAreaRef.current.scrollTo({ top: 0, behavior: 'smooth' });
          }
          if (descriptionAreaRef.current) {
              descriptionAreaRef.current.scrollTo({ top: 0, behavior: 'smooth' });
          }
      }
  }

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);

    if (currentQuestionIndex < scenario.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      scrollToTop();
    } else if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setCurrentQuestionIndex(0);
      scrollToTop();
    } else {
      setIsFinished(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setCurrentScenarioIndex(0);
    setCurrentQuestionIndex(0);
    setCorrectAnswersCount(0);
    setShowExplanation(false);
    setSelectedOption(null);
    setIsFinished(false);
    setHasStarted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!hasStarted) {
    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-3 sm:p-6 md:p-8 font-sans text-slate-800 overflow-hidden">
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 text-center border-t-8 border-indigo-600 transform transition-all flex flex-col md:flex-row items-center gap-4 md:gap-10 max-h-[95vh] overflow-y-auto">
          <div className="flex-shrink-0 flex flex-col items-center">
             <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl filter drop-shadow-lg mb-2 md:mb-0">
               👨‍🔬
             </div>
          </div>
          <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-right">
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-sm w-full">
               פרופסור חקר
             </h1>
             <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-slate-600 w-full">
                האתגר המדעי הגדול! 🧬
             </h2>
             <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-sm sm:text-base md:text-lg lg:text-xl leading-snug sm:leading-relaxed text-slate-700 bg-indigo-50/50 p-3 sm:p-5 md:p-6 rounded-2xl border border-indigo-100 shadow-inner w-full">
               <p className="mb-1 sm:mb-2">ברוכים הבאים למעבדה הווירטואלית שלנו!</p>
               <p>כאן נבחן את ההבנה שלכם במושגי היסוד של החקר המדעי:<br/>
               משתנים 📊, בקרות 🧪, חזרות 🔄, בחירת גרפים 📈 ועוד.</p>
               <p className="mt-2 sm:mt-3 md:mt-4 font-bold text-indigo-800">מוכנים להתחיל לחקור? היעד הוא ציון 100!</p>
             </div>
             <button 
               onClick={handleStart}
               className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 border border-transparent rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
             >
               <span>בואו נתחיל!</span>
               <span className="mr-2 sm:mr-3 text-xl sm:text-2xl md:text-3xl group-hover:scale-125 transition-transform duration-200">🚀</span>
             </button>
          </div>
        </div>
      </div>
    );
  }

  if (isFinished) {
    const finalScore = Math.round((correctAnswersCount / totalQuestions) * 100);
    
    const getDetailedFeedback = () => {
      if (finalScore === 100) return "ביצוע מושלם! הפגנת הבנה מעמיקה בכל מושגי החקר - החל מזיהוי משתנים ובקרות ועד לבנייה נכונה של גרפים והסקת מסקנות. אתה מוכן לגמרי לעבודה במעבדה ולמבחן!";
      if (finalScore >= 80) return "עבודה מצוינת! שלטת ברוב המוחלט של המושגים. שים לב לפרטים הקטנים בנימוקים (כמו ההבדל בין תיאור להסבר), אבל בסך הכל הידע שלך יציב ומרשים.";
      if (finalScore >= 60) return "הפגנת הבנה בסיסית טובה. כדאי לחזור קצת על ההבדלים בין משתנה תלוי לדרך המדידה שלו, ולשנן מתי בוחרים גרף קו רציף ומתי גרף עמודות.";
      return "ניכר שיש עוד מה ללמוד. מומלץ לחזור למצגת, לקרוא שוב על ההבדלים בין משתנה תלוי, בלתי תלוי, בקרות, תיאור תוצאות ומסקנה - ולנסות את התרגול שוב להשגת ציון גבוה יותר!";
    };

    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-green-100 via-teal-50 to-blue-100 flex items-center justify-center p-3 sm:p-6 font-sans">
        <div className="w-full max-w-lg sm:max-w-2xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 text-center border-t-8 border-teal-500 max-h-[95vh] overflow-y-auto">
          <div className="flex justify-center mb-3 sm:mb-4">
            <Trophy size={70} className={`sm:w-[80px] sm:h-[80px] ${finalScore >= 80 ? "text-yellow-400 drop-shadow-md" : "text-slate-300"}`} />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-800">סיימת את התרגול!</h2>
          
          <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-5 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 drop-shadow-sm flex items-center justify-center gap-1 sm:gap-2">
            <span>{finalScore}</span>
            <span className="text-2xl sm:text-3xl md:text-4xl text-slate-400 font-bold mt-2 sm:mt-3 md:mt-4">/100</span>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 md:p-6 text-right mb-5 sm:mb-6 md:mb-8 shadow-inner">
            <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-slate-800 flex items-center gap-1.5 sm:gap-2">
              <Award className="text-teal-600 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
              המשוב האישי שלך:
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-snug sm:leading-relaxed">
              {getDetailedFeedback()}
            </p>
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200 flex flex-row justify-between items-center text-slate-600 font-medium text-xs sm:text-sm md:text-base">
              <span>סך הכל שאלות: {totalQuestions}</span>
              <span>תשובות נכונות: <span className="font-bold text-teal-600 text-base sm:text-lg md:text-xl">{correctAnswersCount}</span></span>
            </div>
          </div>

          <button 
            onClick={handleRestart}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 sm:py-4 md:py-5 px-4 sm:px-6 rounded-2xl text-base sm:text-lg md:text-xl transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <RotateCcw size={18} className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]" />
            תרגול מחדש
          </button>
        </div>
      </div>
    );
  }

  // מסך שאלה
  return (
    <div dir="rtl" className="min-h-[100dvh] lg:h-[100dvh] bg-slate-50 flex flex-col items-center p-2 sm:p-4 font-sans transition-colors duration-500 lg:overflow-hidden">
      <div className="w-full max-w-7xl flex-grow lg:h-full flex flex-col">
        
        {/* מד התקדמות (קומפקטי יותר) */}
        <div className="w-full bg-slate-200 rounded-full h-1.5 sm:h-2 mb-2 sm:mb-4 shadow-inner overflow-hidden flex-row-reverse shrink-0">
          <div 
            className="bg-gradient-to-l from-blue-600 to-indigo-500 h-full rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* האדר עליון (קומפקטי) */}
        <div className="flex flex-row justify-between items-center mb-3 sm:mb-4 bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 gap-2 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-3 text-slate-700 font-bold text-sm sm:text-base md:text-lg flex-grow min-w-0">
            <div className={`p-1 sm:p-1.5 rounded-lg shrink-0 hidden sm:block ${scenario.colors.bgIcon}`}>
              <BookOpen size={16} className={`sm:w-[20px] sm:h-[20px] ${scenario.colors.text}`} />
            </div>
            <span className="truncate">תרחיש {currentScenarioIndex + 1} מתוך {scenarios.length}</span>
          </div>
          
          <div className="text-slate-700 font-medium bg-amber-50 border border-amber-200 py-1 sm:py-1.5 px-2 sm:px-3 rounded-full text-xs sm:text-sm md:text-base shadow-sm flex items-center gap-1 sm:gap-1.5 shrink-0">
            <Star className="text-amber-500 fill-amber-500 drop-shadow-sm w-3 h-3 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
            <span className="whitespace-nowrap">ציון: <span className="font-bold text-slate-900 ml-0.5">{currentScore100}</span><span className="hidden sm:inline"> / 100</span></span>
          </div>
        </div>

        {/* אזור התוכן המרכזי - שתי עמודות במסכים גדולים */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 flex-grow lg:h-full lg:min-h-0">
          
          {/* עמודה ימנית: תיאור ומידע (במובייל זורם למטה בטבעיות) */}
          <div 
            ref={descriptionAreaRef}
            className="w-full lg:w-5/12 xl:w-1/2 flex flex-col gap-3 sm:gap-4 shrink-0 lg:shrink lg:h-full lg:overflow-y-auto lg:pr-1 pb-4 lg:pb-0"
          >
             {/* פינת הלמידה */}
             <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 border border-indigo-100 relative overflow-hidden shrink-0">
               <div className="absolute -left-2 -top-2 text-4xl sm:text-5xl opacity-10">👨‍🏫</div>
               <div className="flex items-start gap-2 sm:gap-3 relative z-10">
                 <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-full shrink-0 text-indigo-600 hidden sm:block">
                   <BrainCircuit size={18} className="sm:w-[20px] sm:h-[20px]" />
                 </div>
                 <div>
                   <h3 className="font-bold text-sm sm:text-base text-indigo-900 mb-0.5 sm:mb-1">פינת הלמידה של פרופסור חקר</h3>
                   <p className="text-indigo-800/90 text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed">
                     {scenario.studyMaterial}
                   </p>
                 </div>
               </div>
             </div>

             {/* כרטיס תיאור הניסוי */}
             <div className={`bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-5 border border-slate-100 border-r-4 ${scenario.colors.border} relative flex-grow flex flex-col`}>
               <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                 <div className={`text-2xl sm:text-3xl md:text-4xl p-1.5 sm:p-2 rounded-lg sm:rounded-xl ${scenario.colors.bgIcon} shadow-inner shrink-0`}>
                   {scenario.illustration}
                 </div>
                 <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-800 leading-tight">{scenario.title}</h2>
               </div>
               <div className="text-slate-700 text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed flex-grow">
                 <p>{scenario.description}</p>
                 {scenario.extraContent && scenario.extraContent()}
               </div>
             </div>
          </div>

          {/* עמודה שמאלית: שאלות (במובייל זורם מתחת, זמין לגלילה טבעית) */}
          <div className="w-full lg:w-7/12 xl:w-1/2 bg-white rounded-xl sm:rounded-2xl shadow-md border border-slate-100 flex flex-col lg:h-full lg:min-h-0 overflow-hidden mb-6 lg:mb-0">
            <div 
                ref={questionAreaRef}
                className="p-3 sm:p-5 md:p-6 lg:overflow-y-auto flex-grow custom-scrollbar"
                style={{ scrollbarWidth: 'thin' }}
            >
                <div className="mb-3 sm:mb-4 md:mb-6">
                  <span className={`inline-block py-0.5 sm:py-1 px-1.5 sm:px-2 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2 ${scenario.colors.bgLight} ${scenario.colors.text}`}>
                    שאלה {currentQuestionIndex + 1} מתוך {scenario.questions.length}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 leading-snug">{question.question}</h3>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {question.options.map((option, index) => {
                    let buttonStyle = `border-slate-200 text-slate-700 bg-white shadow-sm ${scenario.colors.hover}`;
                    let Icon = null;

                    if (showExplanation) {
                      if (index === question.correct) {
                        buttonStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md z-10 relative";
                        Icon = <CheckCircle className="text-emerald-500 mr-2 shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />;
                      } else if (index === selectedOption) {
                        buttonStyle = "border-rose-400 bg-rose-50 text-rose-900 opacity-90";
                        Icon = <XCircle className="text-rose-500 mr-2 shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />;
                      } else {
                        buttonStyle = "border-slate-200 opacity-50 bg-slate-50 text-slate-400";
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        disabled={showExplanation}
                        className={`w-full text-right p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 ease-in-out flex items-center justify-between text-xs sm:text-sm md:text-base lg:text-lg ${buttonStyle} ${!showExplanation ? 'hover:bg-slate-50' : ''}`}
                      >
                        <span className="leading-snug sm:leading-relaxed pr-1">{option}</span>
                        {Icon}
                      </button>
                    );
                  })}
                </div>

                {/* תיבת הסבר לאחר מענה */}
                {showExplanation && (
                  <div className={`mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl flex flex-col gap-2 sm:gap-3 border shadow-inner animate-in fade-in slide-in-from-top-2 duration-300 ${selectedOption === question.correct ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-orange-50 border-orange-200 text-orange-900'}`}>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className={`mt-0.5 p-1 sm:p-1.5 rounded-full shrink-0 hidden sm:block ${selectedOption === question.correct ? 'bg-emerald-100' : 'bg-orange-100'}`}>
                        <Lightbulb size={16} className={`sm:w-[20px] sm:h-[20px] ${selectedOption === question.correct ? 'text-emerald-600' : 'text-orange-500'}`} />
                      </div>
                      <div>
                        <h4 className="font-black text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">
                          {selectedOption === question.correct ? 'כל הכבוד! התשובה נכונה. 🎉' : 'טעות, לא נורא. בואו נלמד מזה! 🧠'}
                        </h4>
                        <p className="text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed opacity-90 font-medium">{question.explanation}</p>
                      </div>
                    </div>
                    <button 
                      onClick={handleNext}
                      className="self-end flex items-center justify-center gap-1.5 sm:gap-2 w-full sm:w-auto bg-slate-800 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:bg-slate-900 hover:shadow-md transition-all mt-1 sm:mt-2"
                    >
                      {currentQuestionIndex < scenario.questions.length - 1 || currentScenarioIndex < scenarios.length - 1 ? 'לשאלה הבאה' : 'למסך הסיום'}
                      <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
