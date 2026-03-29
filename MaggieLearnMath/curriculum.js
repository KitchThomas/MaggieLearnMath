/**
 * 加拿大安大略省五年级数学课程大纲
 * 基于 Ontario Grade 5 Mathematics Curriculum
 */

const curriculum = {
  grade: 5,
  province: "Ontario, Canada",

  units: [
    // ============ 单元1: 数感 - 整数 ============
    {
      id: "number-sense-whole",
      title: "Number Sense - Whole Numbers / 数感 - 整数",
      description: "理解和运用大数字，包括读、写、比较和排序",
      topics: [
        {
          id: "place-value",
          title: "Place Value / 位值",
          description: "理解到百万位的位值系统",
          examples: [
            {
              question: "在数字 456,789 中，7 在哪一位？",
              questionEn: "In the number 456,789, what place value is the digit 7 in?",
              type: "choice",
              options: ["百位 / Hundreds", "十位 / Tens", "千位 / Thousands", "万位 / Ten Thousands"],
              correctAnswer: 1
            },
            {
              question: "3,456,789 中，5 代表多少？",
              questionEn: "In 3,456,789, what value does the digit 5 represent?",
              type: "choice",
              options: ["5", "50", "500", "5,000"],
              correctAnswer: 3
            },
            {
              question: "下面哪个数字有 7 个十万？",
              questionEn: "Which number has 7 in the hundred thousands place?",
              type: "choice",
              options: ["789,456", "678,912", "978,564", "567,891"],
              correctAnswer: 0
            },
            {
              question: "写出这个数字：三百二十万五千六百零七",
              questionEn: "Write this number: 三百二十万五千六百零七",
              type: "input",
              correctAnswer: "3,205,607",
              answers: ["3205607", "3,205,607", "3 205 607"]
            },
            {
              question: "在 9,876,543 中，8 代表多少？",
              questionEn: "In 9,876,543, what value does the digit 8 represent?",
              type: "choice",
              options: ["800", "8,000", "80,000", "800,000"],
              correctAnswer: 2
            }
          ],
          khanAcademy: [
            {
              title: "Place value with whole numbers",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten/imp-place-value-with-powers-of-10/v/place-value-with-whole-numbers",
              type: "video"
            },
            {
              title: "Place value practice",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten/imp-place-value-with-powers-of-10/e/place-value",
              type: "practice"
            }
          ],
          youtube: [
            {
              title: "Place Value Song For Kids | Ones, Tens, Hundreds",
              url: "https://www.youtube.com/watch?v=5W47G-h7myY",
              channel: "Scratch Garden"
            },
            {
              title: "Place Value Through Millions",
              url: "https://www.youtube.com/watch?v=_8xGqn8Nfcs",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Place value",
              url: "https://ca.ixl.com/math/grade-5/place-value-names"
            }
          ]
        },
        {
          id: "compare-order",
          title: "Comparing and Ordering Numbers / 比较和排序数字",
          description: "比较和排序大数字",
          examples: [
            {
              question: "哪个数字更大？456,789 还是 465,432？",
              questionEn: "Which number is larger? 456,789 or 465,432?",
              type: "choice",
              options: ["456,789", "465,432", "它们相等 / They are equal"],
              correctAnswer: 1
            },
            {
              question: "把下面数字从小到大排序：789,456 / 987,654 / 678,912",
              questionEn: "Order these numbers from smallest to largest",
              type: "choice",
              options: ["678,912 < 789,456 < 987,654", "789,456 < 678,912 < 987,654", "987,654 < 789,456 < 678,912"],
              correctAnswer: 0
            },
            {
              question: "在 >、<、= 中选择正确的符号：234,567 ___ 243,567",
              questionEn: "Choose the correct symbol: 234,567 ___ 243,567",
              type: "choice",
              options: [">", "<", "="],
              correctAnswer: 1
            },
            {
              question: "下面哪组数字是按从大到小排列的？",
              questionEn: "Which group is ordered from largest to smallest?",
              type: "choice",
              options: ["123,456 < 234,567 < 345,678", "345,678 > 234,567 > 123,456", "234,567 > 345,678 > 123,456"],
              correctAnswer: 1
            },
            {
              question: "比较：890,123 和 890,132",
              questionEn: "Compare: 890,123 and 890,132",
              type: "choice",
              options: ["890,123 > 890,132", "890,123 < 890,132", "890,123 = 890,132"],
              correctAnswer: 1
            }
          ],
          khanAcademy: [
            {
              title: "Comparing whole numbers",
              url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-comparing-multi-digit-numbers/v/comparing-whole-numbers",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Comparing and Ordering Whole Numbers",
              url: "https://www.youtube.com/watch?v=WLgU3hHLH-4",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Compare numbers up to millions",
              url: "https://ca.ixl.com/math/grade-5/compare-numbers-up-to-millions"
            }
          ]
        },
        {
          id: "rounding",
          title: "Rounding Numbers / 四舍五入",
          description: "四舍五入到不同位值",
          examples: [
            {
              question: "把 4,567 四舍五入到最近的百位",
              questionEn: "Round 4,567 to the nearest hundred",
              type: "choice",
              options: ["4,500", "4,600", "4,570", "5,000"],
              correctAnswer: 1
            },
            {
              question: "把 78,945 四舍五入到最近的千位",
              questionEn: "Round 78,945 to the nearest thousand",
              type: "choice",
              options: ["78,000", "78,900", "79,000", "80,000"],
              correctAnswer: 2
            },
            {
              question: "把 234,567 四舍五入到最近的万位",
              questionEn: "Round 234,567 to the nearest ten thousand",
              type: "choice",
              options: ["230,000", "234,000", "235,000", "240,000"],
              correctAnswer: 0
            },
            {
              question: "下面哪个数字四舍五入到千位后是 56,000？",
              questionEn: "Which number rounds to 56,000 to the nearest thousand?",
              type: "choice",
              options: ["56,499", "55,499", "56,500", "55,500"],
              correctAnswer: 0
            },
            {
              question: "把 9,876 四舍五入到最近的百位是？",
              questionEn: "Round 9,876 to the nearest hundred",
              type: "choice",
              options: ["9,800", "9,880", "9,900", "10,000"],
              correctAnswer: 2
            }
          ],
          khanAcademy: [
            {
              title: "Rounding whole numbers",
              url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-rounding-whole-numbers/v/rounding-whole-numbers",
              type: "video"
            },
            {
              title: "Rounding practice",
              url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-rounding-whole-numbers/e/rounding-whole-numbers",
              type: "practice"
            }
          ],
          youtube: [
            {
              title: "Rounding Numbers Song",
              url: "https://www.youtube.com/watch?v=UP7YmXJc7Ik",
              channel: "Numberock"
            }
          ],
          practice: []
        }
      ]
    },

    // ============ 单元2: 数感 - 小数 ============
    {
      id: "number-sense-decimals",
      title: "Number Sense - Decimals / 数感 - 小数",
      description: "理解和运用小数，包括加减乘除",
      topics: [
        {
          id: "decimal-place-value",
          title: "Decimal Place Value / 小数位值",
          description: "理解小数位值到千分位",
          examples: [
            {
              question: "在 0.456 中，5 在哪一位？",
              questionEn: "In 0.456, what place value is the digit 5 in?",
              type: "choice",
              options: ["十分位 / Tenths", "百分位 / Hundredths", "千分位 / Thousandths", "个位 / Ones"],
              correctAnswer: 1
            },
            {
              question: "0.3 中的 3 代表多少？",
              questionEn: "What value does the digit 3 represent in 0.3?",
              type: "choice",
              options: ["0.003", "0.03", "0.3", "3"],
              correctAnswer: 2
            },
            {
              question: "哪个小数有 6 个百分之一？",
              questionEn: "Which decimal has 6 in the hundredths place?",
              type: "choice",
              options: ["0.065", "0.65", "0.605", "6.5"],
              correctAnswer: 0
            },
            {
              question: "0.789 中，8 代表多少？",
              questionEn: "In 0.789, what value does the digit 8 represent?",
              type: "choice",
              options: ["0.008", "0.08", "0.8", "8"],
              correctAnswer: 1
            },
            {
              question: "比较大小：0.45 和 0.405",
              questionEn: "Compare: 0.45 and 0.405",
              type: "choice",
              options: ["0.45 > 0.405", "0.45 < 0.405", "0.45 = 0.405"],
              correctAnswer: 0
            }
          ],
          khanAcademy: [
            {
              title: "Decimal place value intro",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-decimal-place-value-intro/v/decimal-place-value",
              type: "video"
            },
            {
              title: "Decimals on the number line",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-decimals-on-the-number-line/v/decimals-on-a-number-line",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Understanding Decimal Place Value",
              url: "https://www.youtube.com/watch?v=OqiWuUfLvdc",
              channel: "Math with Mr. J"
            },
            {
              title: "Decimal Place Value Song",
              url: "https://www.youtube.com/watch?v=dXh8MX-fJRo",
              channel: "Numberock"
            }
          ],
          practice: [
            {
              title: "IXL - Decimal place value",
              url: "https://ca.ixl.com/math/grade-5/decimal-place-value"
            }
          ]
        },
        {
          id: "add-subtract-decimals",
          title: "Adding and Subtracting Decimals / 小数加减法",
          description: "小数的加法和减法运算",
          examples: [
            {
              question: "计算：3.45 + 2.3 = ?",
              questionEn: "Calculate: 3.45 + 2.3 = ?",
              type: "choice",
              options: ["5.48", "5.75", "5.78", "6.75"],
              correctAnswer: 1
            },
            {
              question: "计算：8.56 - 3.24 = ?",
              questionEn: "Calculate: 8.56 - 3.24 = ?",
              type: "choice",
              options: ["5.22", "5.32", "5.42", "11.8"],
              correctAnswer: 1
            },
            {
              question: "计算：12.5 + 6.75 = ?",
              questionEn: "Calculate: 12.5 + 6.75 = ?",
              type: "choice",
              options: ["18.25", "19.00", "19.25", "18.75"],
              correctAnswer: 2
            },
            {
              question: "计算：10 - 4.56 = ?",
              questionEn: "Calculate: 10 - 4.56 = ?",
              type: "choice",
              options: ["5.44", "5.54", "6.44", "14.56"],
              correctAnswer: 0
            },
            {
              question: "小红有 5.5 元，小刚有 3.75 元，他们一共有多少元？",
              questionEn: "Xiao Hong has $5.5, Xiao Gang has $3.75. How much do they have together?",
              type: "choice",
              options: ["8.25", "9.25", "9.75", "8.75"],
              correctAnswer: 1
            }
          ],
          khanAcademy: [
            {
              title: "Adding decimals",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-adding-and-subtracting-decimals/imp-adding-decimals-intro/v/adding-decimals-example-1",
              type: "video"
            },
            {
              title: "Subtracting decimals",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-adding-and-subtracting-decimals/imp-subtracting-decimals-intro/v/subtracting-decimals",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Adding Decimals | Math with Mr. J",
              url: "https://www.youtube.com/watch?v=9GlvJ-XRvno",
              channel: "Math with Mr. J"
            },
            {
              title: "Subtracting Decimals | Math with Mr. J",
              url: "https://www.youtube.com/watch?v=6HMdL9nB4s4",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Add and subtract decimals",
              url: "https://ca.ixl.com/math/grade-5/add-and-subtract-decimals"
            }
          ]
        },
        {
          id: "multiply-decimals",
          title: "Multiplying Decimals / 小数乘法",
          description: "小数的乘法运算",
          examples: [
            {
              question: "计算：0.5 × 0.3 = ?",
              questionEn: "Calculate: 0.5 × 0.3 = ?",
              type: "choice",
              options: ["0.15", "0.015", "1.5", "0.8"],
              correctAnswer: 0
            },
            {
              question: "计算：2.5 × 4 = ?",
              questionEn: "Calculate: 2.5 × 4 = ?",
              type: "choice",
              options: ["10", "100", "1.0", "6.5"],
              correctAnswer: 0
            },
            {
              question: "计算：1.2 × 0.11 = ?",
              questionEn: "Calculate: 1.2 × 0.11 = ?",
              type: "choice",
              options: ["0.132", "0.0132", "1.32", "0.022"],
              correctAnswer: 0
            },
            {
              question: "一个苹果 0.5 千克，6 个苹果多少千克？",
              questionEn: "An apple weighs 0.5 kg. How much do 6 apples weigh?",
              type: "choice",
              options: ["3 kg", "0.3 kg", "5.5 kg", "30 kg"],
              correctAnswer: 0
            },
            {
              question: "计算：3.4 × 2.5 = ?",
              questionEn: "Calculate: 3.4 × 2.5 = ?",
              type: "choice",
              options: ["8.5", "0.85", "85", "5.9"],
              correctAnswer: 0
            }
          ],
          khanAcademy: [
            {
              title: "Multiplying decimals",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplying-and-dividing-decimals/imp-multiplying-decimals-strategies/v/multiplying-decimals-example",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Multiplying Decimals",
              url: "https://www.youtube.com/watch?v=JETRf1mFnHM",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Multiply decimals",
              url: "https://ca.ixl.com/math/grade-5/multiply-decimals"
            }
          ]
        },
        {
          id: "divide-decimals",
          title: "Dividing Decimals / 小数除法",
          description: "小数的除法运算",
          examples: [
            {
              question: "计算：4.8 ÷ 2 = ?",
              questionEn: "Calculate: 4.8 ÷ 2 = ?",
              type: "choice",
              options: ["2.4", "0.24", "24", "4.2"],
              correctAnswer: 0
            },
            {
              question: "计算：0.36 ÷ 0.6 = ?",
              questionEn: "Calculate: 0.36 ÷ 0.6 = ?",
              type: "choice",
              options: ["0.6", "0.06", "6", "0.006"],
              correctAnswer: 0
            },
            {
              question: "计算：7.2 ÷ 0.9 = ?",
              questionEn: "Calculate: 7.2 ÷ 0.9 = ?",
              type: "choice",
              options: ["0.8", "8", "80", "7.11"],
              correctAnswer: 1
            },
            {
              question: "5.6 米长的绳子平均分成 4 段，每段多少米？",
              questionEn: "A 5.6 m rope is cut into 4 equal pieces. How long is each piece?",
              type: "choice",
              options: ["1.4 m", "0.14 m", "14 m", "1.11 m"],
              correctAnswer: 0
            },
            {
              question: "计算：12.6 ÷ 3 = ?",
              questionEn: "Calculate: 12.6 ÷ 3 = ?",
              type: "choice",
              options: ["4.2", "0.42", "42", "3.2"],
              correctAnswer: 0
            }
          ],
          khanAcademy: [
            {
              title: "Dividing decimals",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplying-and-dividing-decimals/imp-dividing-decimals-with-hundredths/v/dividing-decimals",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Dividing Decimals",
              url: "https://www.youtube.com/watch?v=wOUkBkLPCGI",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Divide decimals",
              url: "https://ca.ixl.com/math/grade-5/divide-decimals"
            }
          ]
        }
      ]
    },

    // ============ 单元3: 数感 - 分数 ============
    {
      id: "number-sense-fractions",
      title: "Number Sense - Fractions / 数感 - 分数",
      description: "理解和运用分数",
      topics: [
        {
          id: "equivalent-fractions",
          title: "Equivalent Fractions / 等值分数",
          description: "找出和创建等值分数",
          examples: [
            {
              question: "哪个分数等于 1/2？",
              questionEn: "Which fraction is equal to 1/2?",
              type: "choice",
              options: ["2/5", "3/6", "2/3", "3/8"],
              correctAnswer: 1
            },
            {
              question: "2/3 的分子分母同时乘 3，得到的新分数是？",
              questionEn: "Multiply numerator and denominator of 2/3 by 3, you get:",
              type: "choice",
              options: ["5/6", "6/9", "2/9", "6/3"],
              correctAnswer: 1
            },
            {
              question: "填空：3/4 = ?/8",
              questionEn: "Fill in: 3/4 = ?/8",
              type: "choice",
              options: ["4", "5", "6", "7"],
              correctAnswer: 2
            },
            {
              question: "哪个分数和 4/6 相等？",
              questionEn: "Which fraction equals 4/6?",
              type: "choice",
              options: ["3/4", "2/3", "4/8", "6/4"],
              correctAnswer: 1
            },
            {
              question: "把 5/10 化成最简分数是？",
              questionEn: "Simplify 5/10 to lowest terms:",
              type: "choice",
              options: ["1/5", "1/3", "1/2", "5/1"],
              correctAnswer: 2
            }
          ],
          khanAcademy: [
            {
              title: "Equivalent fractions",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-visualizing-equivalent-fractions/v/equivalent-fractions",
              type: "video"
            },
            {
              title: "Equivalent fractions practice",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-visualizing-equivalent-fractions/e/equivalent-fractions",
              type: "practice"
            }
          ],
          youtube: [
            {
              title: "Equivalent Fractions | Math with Mr. J",
              url: "https://www.youtube.com/watch?v=qcHHhd6HizI",
              channel: "Math with Mr. J"
            },
            {
              title: "Equivalent Fractions Song",
              url: "https://www.youtube.com/watch?v=Bss4F1LZsTA",
              channel: "Numberock"
            }
          ],
          practice: []
        },
        {
          id: "compare-fractions",
          title: "Comparing Fractions / 比较分数",
          description: "比较不同分母的分数",
          examples: [
            {
              question: "哪个分数更大：3/4 还是 2/3？",
              questionEn: "Which is larger: 3/4 or 2/3?",
              type: "choice",
              options: ["3/4", "2/3", "它们相等 / Equal"],
              correctAnswer: 0
            },
            {
              question: "比较：1/2 ___ 3/8",
              questionEn: "Compare: 1/2 ___ 3/8",
              type: "choice",
              options: [">", "<", "="],
              correctAnswer: 0
            },
            {
              question: "把分数从小到大排列：2/5, 1/2, 3/5",
              questionEn: "Order from smallest to largest: 2/5, 1/2, 3/5",
              type: "choice",
              options: ["2/5 < 1/2 < 3/5", "1/2 < 2/5 < 3/5", "3/5 < 1/2 < 2/5"],
              correctAnswer: 0
            },
            {
              question: "哪个分数小于 4/5？",
              questionEn: "Which fraction is less than 4/5?",
              type: "choice",
              options: ["5/6", "3/4", "9/10", "4/4"],
              correctAnswer: 1
            },
            {
              question: "比较：5/6 和 7/8",
              questionEn: "Compare: 5/6 and 7/8",
              type: "choice",
              options: ["5/6 > 7/8", "5/6 < 7/8", "5/6 = 7/8"],
              correctAnswer: 1
            }
          ],
          khanAcademy: [
            {
              title: "Comparing fractions with different denominators",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-common-denominators/v/comparing-fractions-with-different-denominators",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Comparing Fractions",
              url: "https://www.youtube.com/watch?v=UA0MjzKmwhg",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Compare fractions",
              url: "https://ca.ixl.com/math/grade-5/compare-fractions-with-unlike-denominators"
            }
          ]
        },
        {
          id: "add-subtract-fractions",
          title: "Adding and Subtracting Fractions / 分数加减法",
          description: "不同分母分数的加减法",
          examples: [
            {
              question: "计算：1/4 + 1/4 = ?",
              questionEn: "Calculate: 1/4 + 1/4 = ?",
              type: "choice",
              options: ["2/8", "1/2", "2/4", "1/8"],
              correctAnswer: 1
            },
            {
              question: "计算：1/2 + 1/3 = ?",
              questionEn: "Calculate: 1/2 + 1/3 = ?",
              type: "choice",
              options: ["2/5", "5/6", "2/6", "1/5"],
              correctAnswer: 1
            },
            {
              question: "计算：3/4 - 1/4 = ?",
              questionEn: "Calculate: 3/4 - 1/4 = ?",
              type: "choice",
              options: ["2/4", "1/2", "2/8", "1/4"],
              correctAnswer: 1
            },
            {
              question: "计算：5/6 - 1/3 = ?",
              questionEn: "Calculate: 5/6 - 1/3 = ?",
              type: "choice",
              options: ["4/3", "3/6", "1/2", "2/3"],
              correctAnswer: 2
            },
            {
              question: "小明吃了 1/4 个披萨，小红吃了 1/3 个披萨，他们一共吃了多少？",
              questionEn: "Xiao Ming ate 1/4 pizza, Xiao Hong ate 1/3 pizza. How much total?",
              type: "choice",
              options: ["2/7", "7/12", "1/6", "2/12"],
              correctAnswer: 1
            }
          ],
          khanAcademy: [
            {
              title: "Adding fractions with unlike denominators",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-add-and-subtract-fractions/imp-adding-fractions-with-unlike-denominators/v/adding-fractions-with-unlike-denominators",
              type: "video"
            },
            {
              title: "Subtracting fractions with unlike denominators",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-add-and-subtract-fractions/imp-subtracting-fractions-with-unlike-denominators-2/v/subtracting-fractions-with-unlike-denominators",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Adding Fractions with Unlike Denominators",
              url: "https://www.youtube.com/watch?v=52ZlXsFJULI",
              channel: "Math with Mr. J"
            },
            {
              title: "Subtracting Fractions with Unlike Denominators",
              url: "https://www.youtube.com/watch?v=BvHkjxcPOOI",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Add fractions with unlike denominators",
              url: "https://ca.ixl.com/math/grade-5/add-fractions-with-unlike-denominators"
            }
          ]
        },
        {
          id: "multiply-fractions",
          title: "Multiplying Fractions / 分数乘法",
          description: "分数与整数和分数的乘法",
          examples: [
            {
              question: "计算：1/2 × 1/3 = ?",
              questionEn: "Calculate: 1/2 × 1/3 = ?",
              type: "choice",
              options: ["2/6", "1/6", "1/5", "2/3"],
              correctAnswer: 1
            },
            {
              question: "计算：3/4 × 2 = ?",
              questionEn: "Calculate: 3/4 × 2 = ?",
              type: "choice",
              options: ["6/4", "3/2", "5/4", "6/8"],
              correctAnswer: 1
            },
            {
              question: "计算：2/3 × 3/5 = ?",
              questionEn: "Calculate: 2/3 × 3/5 = ?",
              type: "choice",
              options: ["6/15", "5/15", "2/5", "6/8"],
              correctAnswer: 2
            },
            {
              question: "一桶水的 1/2 再取 1/3 是多少？",
              questionEn: "Take 1/2 of a bucket, then 1/3 of that. How much?",
              type: "choice",
              options: ["1/5", "2/5", "1/6", "1/3"],
              correctAnswer: 2
            },
            {
              question: "计算：4 × 1/4 = ?",
              questionEn: "Calculate: 4 × 1/4 = ?",
              type: "choice",
              options: ["4/4", "1", "1/16", "4/16"],
              correctAnswer: 1
            }
          ],
          khanAcademy: [
            {
              title: "Multiplying fractions",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiply-fractions/imp-multiplying-fractions/v/multiplying-fractions",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Multiplying Fractions",
              url: "https://www.youtube.com/watch?v=bX95hmVmDjY",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Multiply fractions",
              url: "https://ca.ixl.com/math/grade-5/multiply-fractions"
            }
          ]
        },
        {
          id: "divide-fractions",
          title: "Dividing Fractions / 分数除法",
          description: "分数的除法运算",
          examples: [
            {
              question: "计算：1 ÷ 1/2 = ?",
              questionEn: "Calculate: 1 ÷ 1/2 = ?",
              type: "choice",
              options: ["1/2", "1", "2", "1/4"],
              correctAnswer: 2
            },
            {
              question: "计算：1/2 ÷ 4 = ?",
              questionEn: "Calculate: 1/2 ÷ 4 = ?",
              type: "choice",
              options: ["1/8", "2", "4/2", "1/6"],
              correctAnswer: 0
            },
            {
              question: "把 3/4 平均分成 3 份，每份是多少？",
              questionEn: "Divide 3/4 into 3 equal parts. What is each part?",
              type: "choice",
              options: ["3/12", "1/4", "9/4", "1/12"],
              correctAnswer: 1
            },
            {
              question: "计算：2/3 ÷ 1/3 = ?",
              questionEn: "Calculate: 2/3 ÷ 1/3 = ?",
              type: "choice",
              options: ["2/9", "2", "1/3", "2/6"],
              correctAnswer: 1
            },
            {
              question: "一块蛋糕的 1/2 分给 4 个人，每人得到多少？",
              questionEn: "Divide 1/2 of a cake among 4 people. How much does each get?",
              type: "choice",
              options: ["1/8", "1/6", "1/4", "1/2"],
              correctAnswer: 0
            }
          ],
          khanAcademy: [
            {
              title: "Dividing fractions",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-dividing-fractions/imp-dividing-unit-fractions-by-whole-numbers/v/dividing-unit-fractions-by-whole-numbers",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Dividing Fractions",
              url: "https://www.youtube.com/watch?v=5juto2ze8Lg",
              channel: "Math with Mr. J"
            }
          ],
          practice: []
        }
      ]
    },

    // ============ 单元4: 运算 ============
    {
      id: "operations",
      title: "Operations / 运算",
      description: "多位数的乘法和除法",
      topics: [
        {
          id: "multi-digit-multiplication",
          title: "Multi-digit Multiplication / 多位数乘法",
          description: "两位数和三位数的乘法",
          khanAcademy: [
            {
              title: "Multi-digit multiplication",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multi-digit-multiplication-and-division/imp-multi-digit-multiplication/v/multiplication-5-2-digit-times-a-2-digit-number",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "2-Digit by 2-Digit Multiplication",
              url: "https://www.youtube.com/watch?v=mQH4YXQFL0U",
              channel: "Math with Mr. J"
            },
            {
              title: "Multiplication Song",
              url: "https://www.youtube.com/watch?v=6pSAT7X1SOs",
              channel: "Numberock"
            }
          ],
          practice: [
            {
              title: "IXL - Multiply 2-digit numbers",
              url: "https://ca.ixl.com/math/grade-5/multiply-two-digit-numbers-by-two-digit-numbers"
            }
          ]
        },
        {
          id: "long-division",
          title: "Long Division / 长除法",
          description: "多位数除以一位数和两位数",
          khanAcademy: [
            {
              title: "Long division",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multi-digit-multiplication-and-division/imp-multi-digit-division/v/long-division-without-remainder",
              type: "video"
            },
            {
              title: "Division with remainders",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multi-digit-multiplication-and-division/imp-multi-digit-division/v/long-division-with-remainder-example",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Long Division - Easy Method",
              url: "https://www.youtube.com/watch?v=LGqBQrUYua4",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Divide multi-digit numbers",
              url: "https://ca.ixl.com/math/grade-5/divide-larger-numbers"
            }
          ]
        },
        {
          id: "order-of-operations",
          title: "Order of Operations (BEDMAS) / 运算顺序",
          description: "按正确顺序计算表达式",
          khanAcademy: [
            {
              title: "Order of operations introduction",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-powers-of-ten/imp-order-of-operations-introduction/v/introduction-to-order-of-operations",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Order of Operations | PEMDAS",
              url: "https://www.youtube.com/watch?v=dAgfnK528RA",
              channel: "Math with Mr. J"
            },
            {
              title: "PEMDAS Song",
              url: "https://www.youtube.com/watch?v=JVFyMT5C3Nk",
              channel: "Numberock"
            }
          ],
          practice: [
            {
              title: "IXL - Order of operations",
              url: "https://ca.ixl.com/math/grade-5/order-of-operations"
            }
          ]
        }
      ]
    },

    // ============ 单元5: 代数 ============
    {
      id: "algebra",
      title: "Algebra - Patterns and Equations / 代数 - 规律和方程",
      description: "识别规律，解简单方程",
      topics: [
        {
          id: "patterns",
          title: "Number Patterns / 数字规律",
          description: "识别和延续数字规律",
          khanAcademy: [
            {
              title: "Number patterns",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking/imp-number-patterns/v/practice-finding-patterns-in-numbers",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Number Patterns",
              url: "https://www.youtube.com/watch?v=F9G1yOCH1B0",
              channel: "Math with Mr. J"
            }
          ],
          practice: []
        },
        {
          id: "variables",
          title: "Variables and Expressions / 变量和表达式",
          description: "用字母代表未知数",
          khanAcademy: [
            {
              title: "Variables and expressions",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking/imp-intro-to-variables/v/what-is-a-variable",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "What is a Variable?",
              url: "https://www.youtube.com/watch?v=Xmt6cRRKP1k",
              channel: "Math with Mr. J"
            }
          ],
          practice: []
        },
        {
          id: "equations",
          title: "Simple Equations / 简单方程",
          description: "解简单的一步方程",
          khanAcademy: [
            {
              title: "One-step equations",
              url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-one-step-add-sub-equations/v/simple-equations",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Solving One-Step Equations",
              url: "https://www.youtube.com/watch?v=l3XzepN03KQ",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Solve one-step equations",
              url: "https://ca.ixl.com/math/grade-5/solve-one-step-equations"
            }
          ]
        }
      ]
    },

    // ============ 单元6: 几何 ============
    {
      id: "geometry",
      title: "Geometry / 几何",
      description: "二维和三维图形",
      topics: [
        {
          id: "2d-shapes",
          title: "2D Shapes / 二维图形",
          description: "识别和分类多边形",
          khanAcademy: [
            {
              title: "Classifying shapes",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-classifying-triangles/v/classifying-triangles",
              type: "video"
            },
            {
              title: "Quadrilaterals",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-classifying-quadrilaterals/v/classifying-quadrilaterals",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Types of Quadrilaterals",
              url: "https://www.youtube.com/watch?v=Byd5ACrCYcY",
              channel: "Math with Mr. J"
            }
          ],
          practice: []
        },
        {
          id: "3d-shapes",
          title: "3D Shapes / 三维图形",
          description: "识别立体图形及其特征",
          khanAcademy: [
            {
              title: "Intro to 3D shapes",
              url: "https://www.khanacademy.org/math/basic-geo/basic-geo-volume/basic-geo-volumes-rectangular-prism/v/introduction-to-3d-solids",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "3D Shapes",
              url: "https://www.youtube.com/watch?v=2cg-Uc556-Q",
              channel: "Math with Mr. J"
            }
          ],
          practice: []
        },
        {
          id: "angles",
          title: "Angles / 角度",
          description: "测量和分类角度",
          khanAcademy: [
            {
              title: "Measuring angles",
              url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-measuring-angles/v/using-a-protractor-to-measure-angles",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Types of Angles",
              url: "https://www.youtube.com/watch?v=Rp2-1a0LgtM",
              channel: "Math with Mr. J"
            },
            {
              title: "How to Use a Protractor",
              url: "https://www.youtube.com/watch?v=2TqOh4TQMW4",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Measure angles with a protractor",
              url: "https://ca.ixl.com/math/grade-5/measure-angles-with-a-protractor"
            }
          ]
        },
        {
          id: "coordinate-plane",
          title: "Coordinate Plane / 坐标平面",
          description: "在坐标平面上绘制和读取点",
          khanAcademy: [
            {
              title: "Coordinate plane",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-intro-to-the-coordinate-plane/v/coordinate-plane-graphing-points-intro",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Coordinate Plane Basics",
              url: "https://www.youtube.com/watch?v=9Uc62CuQjc4",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Coordinate plane",
              url: "https://ca.ixl.com/math/grade-5/graph-points-on-a-coordinate-plane"
            }
          ]
        }
      ]
    },

    // ============ 单元7: 测量 ============
    {
      id: "measurement",
      title: "Measurement / 测量",
      description: "周长、面积和体积",
      topics: [
        {
          id: "perimeter",
          title: "Perimeter / 周长",
          description: "计算多边形的周长",
          khanAcademy: [
            {
              title: "Perimeter",
              url: "https://www.khanacademy.org/math/basic-geo/basic-geo-area-and-perimeter/basic-geo-perimeter/v/perimeter-and-area-basics",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "How to Find Perimeter",
              url: "https://www.youtube.com/watch?v=AAY1bpsiaps",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Perimeter",
              url: "https://ca.ixl.com/math/grade-5/perimeter"
            }
          ]
        },
        {
          id: "area",
          title: "Area / 面积",
          description: "计算长方形和三角形的面积",
          khanAcademy: [
            {
              title: "Area of rectangles",
              url: "https://www.khanacademy.org/math/basic-geo/basic-geo-area-and-perimeter/basic-geo-area-rectangle/v/area-of-a-rectangle",
              type: "video"
            },
            {
              title: "Area of triangles",
              url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-area-triangle/v/area-of-a-triangle",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "How to Find Area",
              url: "https://www.youtube.com/watch?v=_uKKl8R1xBM",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Area of rectangles and squares",
              url: "https://ca.ixl.com/math/grade-5/area-of-rectangles-and-squares"
            }
          ]
        },
        {
          id: "volume",
          title: "Volume / 体积",
          description: "计算长方体的体积",
          khanAcademy: [
            {
              title: "Volume of rectangular prisms",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-volume/v/volume-of-a-rectangular-prism",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "How to Find Volume",
              url: "https://www.youtube.com/watch?v=qJwecTgce6c",
              channel: "Math with Mr. J"
            },
            {
              title: "Volume Song",
              url: "https://www.youtube.com/watch?v=7eItzklm0Tg",
              channel: "Numberock"
            }
          ],
          practice: [
            {
              title: "IXL - Volume of rectangular prisms",
              url: "https://ca.ixl.com/math/grade-5/volume-of-rectangular-prisms"
            }
          ]
        },
        {
          id: "unit-conversion",
          title: "Unit Conversion / 单位换算",
          description: "公制和英制单位转换",
          khanAcademy: [
            {
              title: "Converting units",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-unit-conversion/v/converting-pounds-to-ounces",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Metric System Conversions",
              url: "https://www.youtube.com/watch?v=O0pDVbKb5rs",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Convert units",
              url: "https://ca.ixl.com/math/grade-5/convert-units"
            }
          ]
        }
      ]
    },

    // ============ 单元8: 数据和概率 ============
    {
      id: "data-probability",
      title: "Data and Probability / 数据和概率",
      description: "收集、整理和分析数据",
      topics: [
        {
          id: "graphs",
          title: "Graphs and Charts / 图表",
          description: "创建和解读各种图表",
          khanAcademy: [
            {
              title: "Reading bar graphs",
              url: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-data-and-statistics/imp-line-plots/v/line-plots",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Reading Bar Graphs",
              url: "https://www.youtube.com/watch?v=7jqGF8wvMYI",
              channel: "Math with Mr. J"
            }
          ],
          practice: []
        },
        {
          id: "mean-median-mode",
          title: "Mean, Median, Mode / 平均数、中位数、众数",
          description: "计算和理解数据的中心趋势",
          khanAcademy: [
            {
              title: "Mean, median, and mode",
              url: "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-median-basics/v/statistics-intro-mean-median-and-mode",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Mean, Median, Mode, and Range",
              url: "https://www.youtube.com/watch?v=B1HEzNTGeZ4",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Mean, median, mode",
              url: "https://ca.ixl.com/math/grade-5/mean-median-mode-and-range"
            }
          ]
        },
        {
          id: "probability",
          title: "Probability / 概率",
          description: "基本概率概念",
          khanAcademy: [
            {
              title: "Basic probability",
              url: "https://www.khanacademy.org/math/statistics-probability/probability-library/basic-theoretical-probability/v/basic-probability",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Introduction to Probability",
              url: "https://www.youtube.com/watch?v=SkidyDQuupA",
              channel: "Math with Mr. J"
            }
          ],
          practice: [
            {
              title: "IXL - Probability",
              url: "https://ca.ixl.com/math/grade-5/probability"
            }
          ]
        }
      ]
    },

    // ============ 单元9: 财务素养 ============
    {
      id: "financial-literacy",
      title: "Financial Literacy / 财务素养",
      description: "基本理财知识",
      topics: [
        {
          id: "money-calculations",
          title: "Money Calculations / 金钱计算",
          description: "计算价格、找零和折扣",
          khanAcademy: [
            {
              title: "Money word problems",
              url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-rounding-whole-numbers/v/rounding-to-nearest-dollar",
              type: "video"
            }
          ],
          youtube: [
            {
              title: "Counting Money",
              url: "https://www.youtube.com/watch?v=WlbGTsX2BPM",
              channel: "Math with Mr. J"
            }
          ],
          practice: []
        },
        {
          id: "budgeting",
          title: "Budgeting / 预算编制",
          description: "创建简单预算",
          khanAcademy: [],
          youtube: [
            {
              title: "Budgeting for Kids",
              url: "https://www.youtube.com/watch?v=YyOfIj7nWcU",
              channel: "FunKidsTV"
            }
          ],
          practice: []
        }
      ]
    }
  ]
};

module.exports = curriculum;
