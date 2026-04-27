import React, { useState } from 'react';
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
          "האם שמרים יפלטו יותר גז בריכוז גלוקוז של 6%?"
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
    title: "ניסוי 5: פירוק מי חמצן על ידי האנזים קטלאז",
    illustration: "🥔🧪",
    colors: {
      border: "border-blue-500",
      bgLight: "bg-blue-50",
      text: "text-blue-800",
      bgIcon: "bg-blue-100",
      hover: "hover:border-blue-400 hover:bg-blue-50 hover:shadow-blue-200"
    },
    studyMaterial: "סיכום משתנים בניסוי מעבדה: לעולם אל תרשמו כאובייקט רק 'אנזים' או 'צמח'. המשתנה הוא הריכוז שלו, הכמות שלו או הטמפרטורה שלו. למשל: 'ריכוז מיצוי תפוח אדמה' ולא סתם 'תפוח אדמה'. כמו כן, המשתנה התלוי הוא תמיד תהליך ('קצב פעילות האנזים') ולא רק כלי המדידה ('סרגל' או 'גובה קצף').",
    description: "תלמידים רצו לבדוק את השפעת ריכוז האנזים קטלאז (הנמצא במיצוי תפוח אדמה) על קצב פירוק מי חמצן. הם הכינו מערכות עם ריכוזים שונים של מיצוי תפוח אדמה (10%, 20%, 30%, 40%, 50%), בעוד כמות מי החמצן נשמרה קבועה. לאחר 5 דקות, נמדד גובה הקצף שנוצר במבחנה כתוצאה מפליטת גז החמצן.",
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
    title: "ניסוי 6: ניתוח תוצאות - קטלאז המשך",
    illustration: "📈🔬",
    colors: {
      border: "border-pink-500",
      bgLight: "bg-pink-50",
      text: "text-pink-800",
      bgIcon: "bg-pink-100",
      hover: "hover:border-pink-400 hover:bg-pink-50 hover:shadow-pink-200"
    },
    studyMaterial: "יש להבחין בבירור בין שלושה מושגים בניתוח ניסוי: 1. תיאור התוצאות: תיאור מילולי ויבש של מה שרואים בגרף (מגמות עליה/ירידה ונקודות קיצון) ללא פרשנות. 2. הסבר / בסיס ביולוגי: ההיגיון המדעי שעומד מאחורי התוצאות (למשל, 'יותר אנזים פירושו יותר התנגשויות עם הסובסטרט'). 3. מסקנה: שורת המחץ שמסכמת מה למדנו (הקשר הכללי בין המשתנים, כגון 'ככל שהריכוז עולה כך הקצב עולה, עד לנקודת רוויה').",
    description: "חוקרים המשיכו את הניסוי של פירוק מי חמצן על ידי מיצוי תפוח אדמה, והרחיבו את טווח הריכוזים עד ל-100%. הם שרטטו גרף המראה את הקשר בין ריכוז המיצוי (בציר ה-X) לבין גובה הקצף (בציר ה-Y). התבוננו היטב בגרף שלפניכם וענו על השאלות.",
    extraContent: () => (
      <div className="my-6 bg-slate-50 p-6 border border-slate-200 rounded-xl shadow-inner overflow-hidden">
        <h4 className="text-center font-bold text-slate-800 mb-4 text-xl">השפעת ריכוז מיצוי תפוח אדמה על ממוצע גובה הקצף</h4>
        <div className="w-full overflow-x-auto flex justify-center">
          <svg viewBox="0 0 450 220" className="w-full max-w-lg h-auto">
             {/* Axes */}
             <line x1="60" y1="170" x2="420" y2="170" stroke="#64748b" strokeWidth="2"/>
             <line x1="60" y1="20" x2="60" y2="170" stroke="#64748b" strokeWidth="2"/>
             
             {/* Grid lines */}
             {[2,4,6,8,10].map(y => (
               <line key={y} x1="55" y1={170 - (y*14)} x2="420" y2={170 - (y*14)} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4"/>
             ))}
             
             {/* Line */}
             <polyline points="60,170 120,142 180,114 240,86 300,58 360,58 420,58" fill="none" stroke="#ec4899" strokeWidth="3"/>
             
             {/* Points */}
             {[
               [60,170], [120,142], [180,114], [240,86], [300,58], [360,58], [420,58]
             ].map((pt, i) => (
               <circle key={i} cx={pt[0]} cy={pt[1]} r="5" fill="#be185d" />
             ))}

             {/* X Labels */}
             <text x="60" y="190" textAnchor="middle" fontSize="12" fill="#475569">0%</text>
             <text x="120" y="190" textAnchor="middle" fontSize="12" fill="#475569">20%</text>
             <text x="180" y="190" textAnchor="middle" fontSize="12" fill="#475569">40%</text>
             <text x="240" y="190" textAnchor="middle" fontSize="12" fill="#475569">60%</text>
             <text x="300" y="190" textAnchor="middle" fontSize="12" fill="#475569">80%</text>
             <text x="360" y="190" textAnchor="middle" fontSize="12" fill="#475569">100%</text>
             <text x="240" y="215" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">ריכוז מיצוי תפוח אדמה</text>

             {/* Y Labels */}
             <text x="45" y="174" textAnchor="end" fontSize="12" fill="#475569">0</text>
             <text x="45" y="146" textAnchor="end" fontSize="12" fill="#475569">2</text>
             <text x="45" y="118" textAnchor="end" fontSize="12" fill="#475569">4</text>
             <text x="45" y="90" textAnchor="end" fontSize="12" fill="#475569">6</text>
             <text x="45" y="62" textAnchor="end" fontSize="12" fill="#475569">8</text>
             <text x="15" y="95" textAnchor="middle" transform="rotate(-90 15,95)" fontSize="14" fontWeight="bold" fill="#334155">גובה קצף (ס"מ)</text>
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
    illustration: "📊📈",
    colors: {
      border: "border-purple-500",
      bgLight: "bg-purple-50",
      text: "text-purple-800",
      bgIcon: "bg-purple-100",
      hover: "hover:border-purple-400 hover:bg-purple-50 hover:shadow-purple-200"
    },
    studyMaterial: "מיקום המשתנים: הבלתי תלוי תמיד על ציר ה-X, והתלוי (או דרך המדידה) על ציר ה-Y. מתי בוחרים איזה גרף? אם המשתנה הבלתי תלוי הוא 'רציף' (כמו טמפרטורה, זמן, ריכוז - שיש משמעות לערך ביניים כמו 15.5 מעלות) נבחר בגרף קו רציף. אם המשתנה הוא 'בדיד / איכותי' (כמו סוג ירק, סוג דם - אין ערך ביניים בין בטטה לתירס) נבחר בגרף עמודות.",
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

  const scenario = scenarios[currentScenarioIndex];
  const question = scenario?.questions[currentQuestionIndex];
  const totalQuestions = scenarios.reduce((total, sc) => total + sc.questions.length, 0);

  // ספירת מספר השאלה הכללית (למד התקדמות)
  const currentGlobalQuestion = scenarios.slice(0, currentScenarioIndex).reduce((acc, curr) => acc + curr.questions.length, 0) + currentQuestionIndex + 1;
  const progressPercentage = (currentGlobalQuestion / totalQuestions) * 100;
  
  // חישוב הציון הנוכחי מתוך 100
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

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);

    if (currentQuestionIndex < scenario.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setIsFinished(true);
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
  };

  // מסך פתיחה
  if (!hasStarted) {
    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 font-sans text-slate-800">
        <div className="max-w-2xl w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 text-center border-t-8 border-indigo-600 transform transition-all">
          <div className="flex justify-center mb-6">
            <div className="text-8xl filter drop-shadow-lg">
              👨‍🔬
            </div>
          </div>
          <h1 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-sm">
            פרופסור חקר
          </h1>
          <h2 className="text-2xl font-bold mb-8 text-slate-600">האתגר המדעי הגדול! 🧬</h2>
          <div className="mb-10 text-lg leading-relaxed text-slate-700 bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 shadow-inner">
            <p className="mb-2">ברוכים הבאים למעבדה הווירטואלית שלנו!</p>
            <p>כאן נבחן את ההבנה שלכם במושגי היסוד של החקר המדעי:<br/>
            משתנים 📊, בקרות 🧪, חזרות 🔄, בחירת גרפים 📈 ועוד.</p>
            <p className="mt-4 font-bold text-indigo-800">מוכנים להתחיל לחקור? היעד הוא ציון 100!</p>
          </div>
          <button 
            onClick={handleStart}
            className="group relative inline-flex items-center justify-center px-12 py-5 text-2xl font-bold text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 border border-transparent rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            <span>בואו נתחיל!</span>
            <span className="mr-3 text-3xl group-hover:scale-125 transition-transform duration-200">🚀</span>
          </button>
        </div>
      </div>
    );
  }

  // מסך סיום ומשוב
  if (isFinished) {
    // הציון הסופי מחושב מתוך 100
    const finalScore = Math.round((correctAnswersCount / totalQuestions) * 100);
    
    // פונקציה לבניית משוב מותאם אישית
    const getDetailedFeedback = () => {
      if (finalScore === 100) return "ביצוע מושלם! הפגנת הבנה מעמיקה בכל מושגי החקר - החל מזיהוי משתנים ובקרות ועד לבנייה נכונה של גרפים והסקת מסקנות. אתה מוכן לגמרי לעבודה במעבדה ולמבחן!";
      if (finalScore >= 80) return "עבודה מצוינת! שלטת ברוב המוחלט של המושגים. שים לב לפרטים הקטנים בנימוקים (כמו ההבדל בין תיאור להסבר), אבל בסך הכל הידע שלך יציב ומרשים.";
      if (finalScore >= 60) return "הפגנת הבנה בסיסית טובה. כדאי לחזור קצת על ההבדלים בין משתנה תלוי לדרך המדידה שלו, ולשנן מתי בוחרים גרף קו רציף ומתי גרף עמודות.";
      return "ניכר שיש עוד מה ללמוד. מומלץ לחזור למצגת, לקרוא שוב על ההבדלים בין משתנה תלוי, בלתי תלוי, בקרות, תיאור תוצאות ומסקנה - ולנסות את התרגול שוב להשגת ציון גבוה יותר!";
    };

    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-green-100 via-teal-50 to-blue-100 flex items-center justify-center p-4 font-sans">
        <div className="max-w-2xl w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 text-center border-t-8 border-teal-500">
          <div className="flex justify-center mb-4">
            <Trophy size={90} className={finalScore >= 80 ? "text-yellow-400 drop-shadow-md" : "text-slate-300"} />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-slate-800">סיימת את התרגול!</h2>
          
          <div className="text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 drop-shadow-sm flex items-center justify-center gap-2">
            <span>{finalScore}</span>
            <span className="text-4xl text-slate-400 font-bold mt-4">/100</span>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-right mb-8 shadow-inner">
            <h3 className="font-bold text-xl mb-3 text-slate-800 flex items-center gap-2">
              <Award className="text-teal-600" />
              המשוב האישי שלך:
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              {getDetailedFeedback()}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center text-slate-600 font-medium">
              <span>סך הכל שאלות: {totalQuestions}</span>
              <span>תשובות נכונות: <span className="font-bold text-teal-600 text-xl">{correctAnswersCount}</span></span>
            </div>
          </div>

          <button 
            onClick={handleRestart}
            className="flex items-center justify-center gap-3 w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-5 px-6 rounded-2xl text-xl transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <RotateCcw size={24} />
            תרגול מחדש
          </button>
        </div>
      </div>
    );
  }

  // מסך שאלה
  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 flex flex-col items-center py-8 px-4 font-sans transition-colors duration-500">
      <div className="max-w-4xl w-full">
        
        {/* מד התקדמות */}
        <div className="w-full bg-slate-200 rounded-full h-3 mb-8 shadow-inner overflow-hidden flex-row-reverse">
          <div 
            className="bg-gradient-to-l from-blue-600 to-indigo-500 h-3 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* האדר עליון - הצגת הציון הנוכחי מתוך 100 */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 gap-4">
          <div className="flex items-center gap-3 text-slate-700 font-bold text-lg w-full sm:w-auto">
            <div className={`p-2 rounded-xl ${scenario.colors.bgIcon}`}>
              <BookOpen size={24} className={scenario.colors.text} />
            </div>
            <span>תרחיש {currentScenarioIndex + 1} מתוך {scenarios.length}</span>
          </div>
          
          <div className="text-slate-700 w-full sm:w-auto justify-center font-medium bg-amber-50 border border-amber-200 py-2 px-5 rounded-full text-lg shadow-sm flex items-center gap-2">
            <Star className="text-amber-500 fill-amber-500 drop-shadow-sm" size={22} />
            <span>ציון ביניים: <span className="font-bold text-slate-900 ml-1">{currentScore100} / 100</span></span>
          </div>
        </div>

        {/* חומר עזר - הפינה של פרופסור חקר */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl shadow-sm p-6 mb-6 border border-indigo-100 relative overflow-hidden">
          <div className="absolute -left-4 -top-4 text-7xl opacity-10">👨‍🏫</div>
          <div className="flex items-start gap-4 relative z-10">
            <div className="bg-indigo-100 p-3 rounded-full shrink-0 text-indigo-600">
              <BrainCircuit size={28} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-indigo-900 mb-2">פינת הלמידה של פרופסור חקר</h3>
              <p className="text-indigo-800/90 text-lg leading-relaxed">
                {scenario.studyMaterial}
              </p>
            </div>
          </div>
        </div>

        {/* כרטיס תרחיש עם איור */}
        <div className={`bg-white rounded-3xl shadow-lg p-8 mb-8 border border-slate-100 border-r-8 ${scenario.colors.border} relative overflow-hidden transition-all duration-300`}>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className={`text-6xl p-4 rounded-2xl ${scenario.colors.bgIcon} shadow-inner shrink-0 hidden md:block`}>
              {scenario.illustration}
            </div>
            <div className="w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className={`text-5xl md:hidden`}>{scenario.illustration}</div>
                <h2 className="text-3xl font-bold text-slate-800">{scenario.title}</h2>
              </div>
              <p className="text-slate-700 text-xl leading-relaxed">{scenario.description}</p>
              {scenario.extraContent && scenario.extraContent()}
            </div>
          </div>
        </div>

        {/* אזור השאלה */}
        <div className="bg-white rounded-3xl shadow-md p-8 border border-slate-100 mb-10">
          <div className="mb-8">
            <span className={`inline-block py-1 px-3 rounded-lg text-sm font-bold uppercase tracking-wider mb-4 ${scenario.colors.bgLight} ${scenario.colors.text}`}>
              שאלה {currentQuestionIndex + 1} מתוך {scenario.questions.length}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 leading-snug">{question.question}</h3>
          </div>

          <div className="space-y-4">
            {question.options.map((option, index) => {
              let buttonStyle = `border-slate-200 text-slate-700 bg-white shadow-sm ${scenario.colors.hover}`;
              let Icon = null;

              if (showExplanation) {
                if (index === question.correct) {
                  buttonStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md scale-[1.02]";
                  Icon = <CheckCircle className="text-emerald-500 mr-3 shrink-0" size={28} />;
                } else if (index === selectedOption) {
                  buttonStyle = "border-rose-400 bg-rose-50 text-rose-900 scale-95 opacity-80";
                  Icon = <XCircle className="text-rose-500 mr-3 shrink-0" size={28} />;
                } else {
                  buttonStyle = "border-slate-200 opacity-40 bg-slate-50 text-slate-500";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showExplanation}
                  className={`w-full text-right p-5 rounded-2xl border-2 transition-all duration-300 ease-in-out flex items-center justify-between text-xl ${buttonStyle} ${!showExplanation ? 'hover:-translate-y-1' : ''}`}
                >
                  <span className="leading-relaxed">{option}</span>
                  {Icon}
                </button>
              );
            })}
          </div>

          {/* תיבת הסבר לאחר מענה */}
          {showExplanation && (
            <div className={`mt-8 p-6 rounded-2xl flex flex-col gap-5 border shadow-inner animate-in fade-in slide-in-from-top-4 duration-500 ${selectedOption === question.correct ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-orange-50 border-orange-200 text-orange-900'}`}>
              <div className="flex items-start gap-4">
                <div className={`mt-1 p-2 rounded-full shrink-0 ${selectedOption === question.correct ? 'bg-emerald-100' : 'bg-orange-100'}`}>
                  <Lightbulb size={28} className={selectedOption === question.correct ? 'text-emerald-600' : 'text-orange-500'} />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2">
                    {selectedOption === question.correct ? 'כל הכבוד! התשובה נכונה. 🎉' : 'טעות, לא נורא. בואו נלמד מזה! 🧠'}
                  </h4>
                  <p className="text-xl leading-relaxed opacity-90 font-medium">{question.explanation}</p>
                </div>
              </div>
              <button 
                onClick={handleNext}
                className="self-end flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-900 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {currentQuestionIndex < scenario.questions.length - 1 || currentScenarioIndex < scenarios.length - 1 ? 'המשך לשאלה הבאה' : 'למסך הסיום'}
                <ArrowLeft size={22} />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
