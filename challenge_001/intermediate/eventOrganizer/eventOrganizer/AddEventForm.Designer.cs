namespace eventOrganizer {
    partial class AddEventForm {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing) {
            if(disposing && (components != null)) {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent() {
            this.MainPanel = new System.Windows.Forms.Panel();
            this.MainLayout = new System.Windows.Forms.TableLayoutPanel();
            this.ButtonLayout = new System.Windows.Forms.TableLayoutPanel();
            this.Add = new System.Windows.Forms.Button();
            this.Cancel = new System.Windows.Forms.Button();
            this.TopPanel = new System.Windows.Forms.Panel();
            this.Title = new System.Windows.Forms.Label();
            this.MainPanel.SuspendLayout();
            this.MainLayout.SuspendLayout();
            this.ButtonLayout.SuspendLayout();
            this.TopPanel.SuspendLayout();
            this.SuspendLayout();
            // 
            // MainPanel
            // 
            this.MainPanel.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(37)))), ((int)(((byte)(37)))), ((int)(((byte)(37)))));
            this.MainPanel.Controls.Add(this.MainLayout);
            this.MainPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MainPanel.Location = new System.Drawing.Point(1, 1);
            this.MainPanel.Margin = new System.Windows.Forms.Padding(0);
            this.MainPanel.Name = "MainPanel";
            this.MainPanel.Size = new System.Drawing.Size(352, 298);
            this.MainPanel.TabIndex = 0;
            // 
            // MainLayout
            // 
            this.MainLayout.ColumnCount = 1;
            this.MainLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.MainLayout.Controls.Add(this.ButtonLayout, 0, 2);
            this.MainLayout.Controls.Add(this.TopPanel, 0, 0);
            this.MainLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MainLayout.Location = new System.Drawing.Point(0, 0);
            this.MainLayout.Margin = new System.Windows.Forms.Padding(0);
            this.MainLayout.Name = "MainLayout";
            this.MainLayout.RowCount = 3;
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 30F));
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 81.34328F));
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 18.65672F));
            this.MainLayout.Size = new System.Drawing.Size(352, 298);
            this.MainLayout.TabIndex = 1;
            // 
            // ButtonLayout
            // 
            this.ButtonLayout.ColumnCount = 4;
            this.ButtonLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.ButtonLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.ButtonLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.ButtonLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.ButtonLayout.Controls.Add(this.Add, 1, 0);
            this.ButtonLayout.Controls.Add(this.Cancel, 2, 0);
            this.ButtonLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.ButtonLayout.Location = new System.Drawing.Point(0, 247);
            this.ButtonLayout.Margin = new System.Windows.Forms.Padding(0);
            this.ButtonLayout.Name = "ButtonLayout";
            this.ButtonLayout.RowCount = 1;
            this.ButtonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.ButtonLayout.Size = new System.Drawing.Size(352, 51);
            this.ButtonLayout.TabIndex = 1;
            // 
            // Add
            // 
            this.Add.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Add.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(150)))), ((int)(((byte)(150)))), ((int)(((byte)(150)))));
            this.Add.FlatAppearance.MouseDownBackColor = System.Drawing.Color.DodgerBlue;
            this.Add.FlatAppearance.MouseOverBackColor = System.Drawing.Color.RoyalBlue;
            this.Add.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Add.Location = new System.Drawing.Point(96, 8);
            this.Add.Margin = new System.Windows.Forms.Padding(8);
            this.Add.Name = "Add";
            this.Add.Size = new System.Drawing.Size(72, 35);
            this.Add.TabIndex = 0;
            this.Add.Text = "Add";
            this.Add.UseVisualStyleBackColor = true;
            this.Add.Click += new System.EventHandler(this.Add_Click);
            // 
            // Cancel
            // 
            this.Cancel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Cancel.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(150)))), ((int)(((byte)(150)))), ((int)(((byte)(150)))));
            this.Cancel.FlatAppearance.MouseDownBackColor = System.Drawing.Color.DodgerBlue;
            this.Cancel.FlatAppearance.MouseOverBackColor = System.Drawing.Color.RoyalBlue;
            this.Cancel.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Cancel.Location = new System.Drawing.Point(184, 8);
            this.Cancel.Margin = new System.Windows.Forms.Padding(8);
            this.Cancel.Name = "Cancel";
            this.Cancel.Size = new System.Drawing.Size(72, 35);
            this.Cancel.TabIndex = 1;
            this.Cancel.Text = "Cancel";
            this.Cancel.UseVisualStyleBackColor = true;
            this.Cancel.Click += new System.EventHandler(this.Cancel_Click);
            // 
            // TopPanel
            // 
            this.TopPanel.Controls.Add(this.Title);
            this.TopPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.TopPanel.Location = new System.Drawing.Point(0, 0);
            this.TopPanel.Margin = new System.Windows.Forms.Padding(0);
            this.TopPanel.Name = "TopPanel";
            this.TopPanel.Size = new System.Drawing.Size(352, 30);
            this.TopPanel.TabIndex = 2;
            this.TopPanel.MouseDown += new System.Windows.Forms.MouseEventHandler(this.GetMousePosition);
            this.TopPanel.MouseMove += new System.Windows.Forms.MouseEventHandler(this.DragMouse);
            // 
            // Title
            // 
            this.Title.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.Title.AutoSize = true;
            this.Title.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Title.Location = new System.Drawing.Point(6, 8);
            this.Title.Name = "Title";
            this.Title.Size = new System.Drawing.Size(88, 15);
            this.Title.TabIndex = 0;
            this.Title.Text = "Add New Event";
            this.Title.MouseDown += new System.Windows.Forms.MouseEventHandler(this.GetMousePosition);
            this.Title.MouseMove += new System.Windows.Forms.MouseEventHandler(this.DragMouse);
            // 
            // AddEventForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 21F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(80)))), ((int)(((byte)(80)))), ((int)(((byte)(80)))));
            this.ClientSize = new System.Drawing.Size(354, 300);
            this.Controls.Add(this.MainPanel);
            this.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.Name = "AddEventForm";
            this.Padding = new System.Windows.Forms.Padding(1);
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Add New Event";
            this.MainPanel.ResumeLayout(false);
            this.MainLayout.ResumeLayout(false);
            this.ButtonLayout.ResumeLayout(false);
            this.TopPanel.ResumeLayout(false);
            this.TopPanel.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel MainPanel;
        private System.Windows.Forms.TableLayoutPanel MainLayout;
        private System.Windows.Forms.TableLayoutPanel ButtonLayout;
        private System.Windows.Forms.Button Add;
        private System.Windows.Forms.Button Cancel;
        private System.Windows.Forms.Panel TopPanel;
        private System.Windows.Forms.Label Title;

    }
}