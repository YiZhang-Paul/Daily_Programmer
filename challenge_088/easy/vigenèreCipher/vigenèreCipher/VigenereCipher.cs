using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vigenèreCipher {
    class VigenereCipher {

        public string Key { get; private set; }
        /// <param name="key">encryption/decryption key</param>
        public VigenereCipher(string key) {

            SetKey(key);
        }
        /// <summary>
        /// set encryption/decryption key
        /// </summary>
        /// <param name="key">encryption/decryption key</param>
        public void SetKey(string key) {

            Key = key;
        }
        /// <summary>
        /// retrieve key character for encryption/decryption
        /// </summary>
        /// <returns>key character</returns>
        public IEnumerable<char> GetKeyChar() {

            for(int i = 0; i < Key.Length; i++) {

                yield return Key[i];

                i = i == Key.Length - 1 ? -1 : i;
            }
        }
        /// <summary>
        /// convert character to value
        /// </summary>
        /// <param name="character">character to convert</param>
        /// <returns>value after conversion</returns>
        public int CharToValue(char character) {

            return Char.ConvertToUtf32(character.ToString(), 0) - 65;
        }
        /// <summary>
        /// convert value to character
        /// </summary>
        /// <param name="value">value to convert</param>
        /// <returns>character after conversion</returns>
        public char ValueToChar(int value) {

            return Char.ConvertFromUtf32(value + 65)[0];
        }
        /// <summary>
        /// encrypt messages
        /// </summary>
        /// <param name="message">message to encrypt</param>
        /// <returns>encrypted messages</returns>
        public string Encrypt(string message) {

            var encrypted = new StringBuilder();
            int counter = 0;

            foreach(char keyChar in GetKeyChar().Take(message.Length)) {

                int charValue = (CharToValue(message[counter++]) + CharToValue(keyChar)) % 26;
                encrypted.Append(ValueToChar(charValue));
            }

            return encrypted.ToString();
        }
        /// <summary>
        /// decrypt messages
        /// </summary>
        /// <param name="encrypted">encrypted messages</param>
        /// <returns>decrypted messages</returns>
        public string Decrypt(string encrypted) {

            var decrypted = new StringBuilder();
            int counter = 0;

            foreach(char keyChar in GetKeyChar().Take(encrypted.Length)) {

                int charValue = (CharToValue(encrypted[counter++]) - CharToValue(keyChar) + 26) % 26;
                decrypted.Append(ValueToChar(charValue));
            }

            return decrypted.ToString();
        }
    }
}