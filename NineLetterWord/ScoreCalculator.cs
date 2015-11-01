using System;
using System.Collections.Generic;
using System.Web;
using System.IO;

namespace NLW
{
    public class LetterValues
    {
        Dictionary<char, Int16> letters = new Dictionary<char, Int16>();
        public LetterValues()
        {
            letters.Add('A', 1);
            letters.Add('B', 3);
            letters.Add('C', 3);
            letters.Add('D', 2);
            letters.Add('E', 1);
            letters.Add('F', 4);
            letters.Add('G', 2);
            letters.Add('H', 4);
            letters.Add('I', 1);
            letters.Add('J', 8);
            letters.Add('K', 5);
            letters.Add('L', 1);
            letters.Add('M', 3);
            letters.Add('N', 1);
            letters.Add('O', 1);
            letters.Add('P', 3);
            letters.Add('Q', 10);
            letters.Add('R', 1);
            letters.Add('S', 1);
            letters.Add('T', 1);
            letters.Add('U', 1);
            letters.Add('V', 4);
            letters.Add('W', 4);
            letters.Add('X', 8);
            letters.Add('Y', 4);
            letters.Add('Z', 10);

        }

        public Int16 getWordValue(string word, String strGameTimeLeft)
        {
            Int16 wordLengthValue = 0;
            Int16 wordLetterValue = 0;
            char[] charWord = word.ToCharArray();
            for (Int16 i = 0; i < charWord.Length; i++)
            {
                wordLengthValue += i;
                wordLetterValue += getLetterValue(charWord[i]);
            }
            return (Int16)(wordLetterValue + wordLengthValue + Int32.Parse(strGameTimeLeft));
        }

        public Int16 getLetterValue(char letter)
        {
            // See whether Dictionary contains this letter.
            if (letters.ContainsKey(letter))
            {
                return letters[letter];
            }

            return 0;
        }
    }

    public class ScoreCalulator
    {
        public String FindWord(String strWord, String strGameTimeLeft)
        {
            // Read every line in the file.
            string wordFile = HttpContext.Current.Server.MapPath("~/sowpods.txt");
            using (StreamReader reader = new StreamReader(wordFile))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    if (string.Equals(strWord, line))
                    {
                        LetterValues letters = new LetterValues();

                        return "found the word!<BR><BR>" + strWord + "<BR><BR>score : " + letters.getWordValue(strWord, strGameTimeLeft);
                    }
                    // Do something with the line.
                    //string[] parts = line.Split(',');
                }
                return "<BR><BR>No such word:  " + strWord;
            }
            
        }
    }
}