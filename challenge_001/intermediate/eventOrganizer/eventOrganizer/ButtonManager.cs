using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Drawing;

namespace eventOrganizer {
    class ButtonManager {

        public Dictionary<Button, bool> Status { get; private set; }

        public ButtonManager(Button[] buttons) {

            Status = InitializeStatus(buttons);
        }

        private Dictionary<Button, bool> InitializeStatus(Button[] buttons) { 
        
            var status = new Dictionary<Button, bool>();

            foreach(var button in buttons) {

                status.Add(button, true);
            }

            return status;
        }

        public bool IsEnabled(Button button) { 
        
            return Status.ContainsKey(button) ? Status[button] : false;
        }

        public void SetStatus(Button button, bool status) { 
        
            if(Status.ContainsKey(button)) {

                Status[button] = status;
            }
        }

        public void Enable(Button button) {

            button.FlatAppearance.BorderSize = 1;
            button.ForeColor = SystemColors.ControlLightLight;
            button.FlatAppearance.MouseOverBackColor = Color.RoyalBlue;
            button.FlatAppearance.MouseDownBackColor = Color.DodgerBlue;
        }

        public void Disable(Button button) {

            button.FlatAppearance.BorderSize = 0;
            button.ForeColor = SystemColors.WindowFrame;
            button.FlatAppearance.MouseOverBackColor = Color.FromArgb(12, 12, 12);
            button.FlatAppearance.MouseDownBackColor = Color.FromArgb(12, 12, 12);
        }

        public void Toggle(Button button) {

            if(Status.ContainsKey(button)) {

                Status[button] = !Status[button];

                if(Status[button]) {

                    Enable(button);
                }
                else {

                    Disable(button);
                }
            }
        }
    }
}