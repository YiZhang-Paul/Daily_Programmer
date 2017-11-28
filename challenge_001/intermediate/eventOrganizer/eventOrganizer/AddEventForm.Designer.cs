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
            this.components = new System.ComponentModel.Container();
            this.MainPanel = new System.Windows.Forms.Panel();
            this.MainLayout = new System.Windows.Forms.TableLayoutPanel();
            this.ButtonLayout = new System.Windows.Forms.TableLayoutPanel();
            this.Add = new System.Windows.Forms.Button();
            this.Cancel = new System.Windows.Forms.Button();
            this.TopPanel = new System.Windows.Forms.Panel();
            this.Title = new System.Windows.Forms.Label();
            this.InputLayout = new System.Windows.Forms.TableLayoutPanel();
            this.DateErrorLayout = new System.Windows.Forms.TableLayoutPanel();
            this.DateErrorLabel = new System.Windows.Forms.Label();
            this.TitleInputLayout = new System.Windows.Forms.TableLayoutPanel();
            this.TitleLabel = new System.Windows.Forms.Label();
            this.EventTitle = new System.Windows.Forms.TextBox();
            this.DateInputLayout = new System.Windows.Forms.TableLayoutPanel();
            this.DateLabel = new System.Windows.Forms.Label();
            this.EventDate = new System.Windows.Forms.DateTimePicker();
            this.EventDetail = new System.Windows.Forms.RichTextBox();
            this.EventDetailLabel = new System.Windows.Forms.Label();
            this.TitleErrorLayout = new System.Windows.Forms.TableLayoutPanel();
            this.TitleErrorLabel = new System.Windows.Forms.Label();
            this.CloseTimer = new System.Windows.Forms.Timer(this.components);
            this.MainPanel.SuspendLayout();
            this.MainLayout.SuspendLayout();
            this.ButtonLayout.SuspendLayout();
            this.TopPanel.SuspendLayout();
            this.InputLayout.SuspendLayout();
            this.DateErrorLayout.SuspendLayout();
            this.TitleInputLayout.SuspendLayout();
            this.DateInputLayout.SuspendLayout();
            this.TitleErrorLayout.SuspendLayout();
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
            this.MainPanel.Size = new System.Drawing.Size(352, 451);
            this.MainPanel.TabIndex = 0;
            // 
            // MainLayout
            // 
            this.MainLayout.ColumnCount = 1;
            this.MainLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.MainLayout.Controls.Add(this.ButtonLayout, 0, 2);
            this.MainLayout.Controls.Add(this.TopPanel, 0, 0);
            this.MainLayout.Controls.Add(this.InputLayout, 0, 1);
            this.MainLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MainLayout.Location = new System.Drawing.Point(0, 0);
            this.MainLayout.Margin = new System.Windows.Forms.Padding(0);
            this.MainLayout.Name = "MainLayout";
            this.MainLayout.RowCount = 3;
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 30F));
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 88.59857F));
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 11.40143F));
            this.MainLayout.Size = new System.Drawing.Size(352, 451);
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
            this.ButtonLayout.Location = new System.Drawing.Point(0, 402);
            this.ButtonLayout.Margin = new System.Windows.Forms.Padding(0);
            this.ButtonLayout.Name = "ButtonLayout";
            this.ButtonLayout.RowCount = 1;
            this.ButtonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.ButtonLayout.Size = new System.Drawing.Size(352, 49);
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
            this.Add.Size = new System.Drawing.Size(72, 33);
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
            this.Cancel.Size = new System.Drawing.Size(72, 33);
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
            this.Title.AutoSize = true;
            this.Title.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Title.Location = new System.Drawing.Point(135, 8);
            this.Title.Name = "Title";
            this.Title.Size = new System.Drawing.Size(88, 15);
            this.Title.TabIndex = 0;
            this.Title.Text = "Add New Event";
            this.Title.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.Title.MouseDown += new System.Windows.Forms.MouseEventHandler(this.GetMousePosition);
            this.Title.MouseMove += new System.Windows.Forms.MouseEventHandler(this.DragMouse);
            // 
            // InputLayout
            // 
            this.InputLayout.ColumnCount = 1;
            this.InputLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.InputLayout.Controls.Add(this.DateErrorLayout, 0, 2);
            this.InputLayout.Controls.Add(this.TitleInputLayout, 0, 1);
            this.InputLayout.Controls.Add(this.DateInputLayout, 0, 3);
            this.InputLayout.Controls.Add(this.EventDetail, 0, 5);
            this.InputLayout.Controls.Add(this.EventDetailLabel, 0, 4);
            this.InputLayout.Controls.Add(this.TitleErrorLayout, 0, 0);
            this.InputLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.InputLayout.Location = new System.Drawing.Point(0, 30);
            this.InputLayout.Margin = new System.Windows.Forms.Padding(0);
            this.InputLayout.Name = "InputLayout";
            this.InputLayout.RowCount = 6;
            this.InputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.InputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 10F));
            this.InputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.InputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 10F));
            this.InputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 10F));
            this.InputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 70F));
            this.InputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.InputLayout.Size = new System.Drawing.Size(352, 372);
            this.InputLayout.TabIndex = 3;
            // 
            // DateErrorLayout
            // 
            this.DateErrorLayout.ColumnCount = 2;
            this.DateErrorLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 21.02273F));
            this.DateErrorLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 78.97727F));
            this.DateErrorLayout.Controls.Add(this.DateErrorLabel, 1, 0);
            this.DateErrorLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.DateErrorLayout.Location = new System.Drawing.Point(0, 53);
            this.DateErrorLayout.Margin = new System.Windows.Forms.Padding(0);
            this.DateErrorLayout.Name = "DateErrorLayout";
            this.DateErrorLayout.RowCount = 1;
            this.DateErrorLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.DateErrorLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.DateErrorLayout.Size = new System.Drawing.Size(352, 20);
            this.DateErrorLayout.TabIndex = 5;
            // 
            // DateErrorLabel
            // 
            this.DateErrorLabel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.DateErrorLabel.AutoSize = true;
            this.DateErrorLabel.Font = new System.Drawing.Font("Segoe UI", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.DateErrorLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(128)))), ((int)(((byte)(0)))));
            this.DateErrorLabel.Location = new System.Drawing.Point(77, 7);
            this.DateErrorLabel.Name = "DateErrorLabel";
            this.DateErrorLabel.Size = new System.Drawing.Size(197, 13);
            this.DateErrorLabel.TabIndex = 1;
            this.DateErrorLabel.Text = "* date must be current or future date";
            this.DateErrorLabel.Visible = false;
            // 
            // TitleInputLayout
            // 
            this.TitleInputLayout.ColumnCount = 2;
            this.TitleInputLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 21.30682F));
            this.TitleInputLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 78.69318F));
            this.TitleInputLayout.Controls.Add(this.TitleLabel, 0, 0);
            this.TitleInputLayout.Controls.Add(this.EventTitle, 1, 0);
            this.TitleInputLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.TitleInputLayout.Location = new System.Drawing.Point(0, 20);
            this.TitleInputLayout.Margin = new System.Windows.Forms.Padding(0);
            this.TitleInputLayout.Name = "TitleInputLayout";
            this.TitleInputLayout.RowCount = 1;
            this.TitleInputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.TitleInputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.TitleInputLayout.Size = new System.Drawing.Size(352, 33);
            this.TitleInputLayout.TabIndex = 0;
            // 
            // TitleLabel
            // 
            this.TitleLabel.AutoSize = true;
            this.TitleLabel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.TitleLabel.Font = new System.Drawing.Font("Segoe UI", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TitleLabel.Location = new System.Drawing.Point(8, 0);
            this.TitleLabel.Margin = new System.Windows.Forms.Padding(8, 0, 3, 0);
            this.TitleLabel.Name = "TitleLabel";
            this.TitleLabel.Size = new System.Drawing.Size(64, 33);
            this.TitleLabel.TabIndex = 0;
            this.TitleLabel.Text = "Title";
            this.TitleLabel.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // EventTitle
            // 
            this.EventTitle.Dock = System.Windows.Forms.DockStyle.Fill;
            this.EventTitle.Location = new System.Drawing.Point(78, 3);
            this.EventTitle.Margin = new System.Windows.Forms.Padding(3, 3, 30, 3);
            this.EventTitle.MaxLength = 50;
            this.EventTitle.Name = "EventTitle";
            this.EventTitle.Size = new System.Drawing.Size(244, 29);
            this.EventTitle.TabIndex = 1;
            // 
            // DateInputLayout
            // 
            this.DateInputLayout.ColumnCount = 2;
            this.DateInputLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 21.30682F));
            this.DateInputLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 78.69318F));
            this.DateInputLayout.Controls.Add(this.DateLabel, 0, 0);
            this.DateInputLayout.Controls.Add(this.EventDate, 1, 0);
            this.DateInputLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.DateInputLayout.Location = new System.Drawing.Point(0, 73);
            this.DateInputLayout.Margin = new System.Windows.Forms.Padding(0);
            this.DateInputLayout.Name = "DateInputLayout";
            this.DateInputLayout.RowCount = 1;
            this.DateInputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.DateInputLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.DateInputLayout.Size = new System.Drawing.Size(352, 33);
            this.DateInputLayout.TabIndex = 1;
            // 
            // DateLabel
            // 
            this.DateLabel.AutoSize = true;
            this.DateLabel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.DateLabel.Font = new System.Drawing.Font("Segoe UI", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.DateLabel.Location = new System.Drawing.Point(8, 0);
            this.DateLabel.Margin = new System.Windows.Forms.Padding(8, 0, 3, 0);
            this.DateLabel.Name = "DateLabel";
            this.DateLabel.Size = new System.Drawing.Size(64, 33);
            this.DateLabel.TabIndex = 0;
            this.DateLabel.Text = "Date";
            this.DateLabel.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // EventDate
            // 
            this.EventDate.Dock = System.Windows.Forms.DockStyle.Fill;
            this.EventDate.Location = new System.Drawing.Point(78, 3);
            this.EventDate.Margin = new System.Windows.Forms.Padding(3, 3, 30, 3);
            this.EventDate.Name = "EventDate";
            this.EventDate.Size = new System.Drawing.Size(244, 29);
            this.EventDate.TabIndex = 1;
            // 
            // EventDetail
            // 
            this.EventDetail.Dock = System.Windows.Forms.DockStyle.Fill;
            this.EventDetail.Location = new System.Drawing.Point(16, 142);
            this.EventDetail.Margin = new System.Windows.Forms.Padding(16, 3, 16, 8);
            this.EventDetail.Name = "EventDetail";
            this.EventDetail.Size = new System.Drawing.Size(320, 222);
            this.EventDetail.TabIndex = 2;
            this.EventDetail.Text = "";
            // 
            // EventDetailLabel
            // 
            this.EventDetailLabel.Anchor = System.Windows.Forms.AnchorStyles.Bottom;
            this.EventDetailLabel.AutoSize = true;
            this.EventDetailLabel.Font = new System.Drawing.Font("Segoe UI", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.EventDetailLabel.Location = new System.Drawing.Point(121, 122);
            this.EventDetailLabel.Name = "EventDetailLabel";
            this.EventDetailLabel.Size = new System.Drawing.Size(109, 17);
            this.EventDetailLabel.TabIndex = 3;
            this.EventDetailLabel.Text = "Details (Optional)";
            // 
            // TitleErrorLayout
            // 
            this.TitleErrorLayout.ColumnCount = 2;
            this.TitleErrorLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 21.02273F));
            this.TitleErrorLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 78.97727F));
            this.TitleErrorLayout.Controls.Add(this.TitleErrorLabel, 1, 0);
            this.TitleErrorLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.TitleErrorLayout.Location = new System.Drawing.Point(0, 0);
            this.TitleErrorLayout.Margin = new System.Windows.Forms.Padding(0);
            this.TitleErrorLayout.Name = "TitleErrorLayout";
            this.TitleErrorLayout.RowCount = 1;
            this.TitleErrorLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.TitleErrorLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.TitleErrorLayout.Size = new System.Drawing.Size(352, 20);
            this.TitleErrorLayout.TabIndex = 4;
            // 
            // TitleErrorLabel
            // 
            this.TitleErrorLabel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.TitleErrorLabel.AutoSize = true;
            this.TitleErrorLabel.Font = new System.Drawing.Font("Segoe UI", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TitleErrorLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(128)))), ((int)(((byte)(0)))));
            this.TitleErrorLabel.Location = new System.Drawing.Point(77, 7);
            this.TitleErrorLabel.Name = "TitleErrorLabel";
            this.TitleErrorLabel.Size = new System.Drawing.Size(124, 13);
            this.TitleErrorLabel.TabIndex = 0;
            this.TitleErrorLabel.Text = "* title cannot be empty";
            this.TitleErrorLabel.Visible = false;
            // 
            // CloseTimer
            // 
            this.CloseTimer.Enabled = true;
            this.CloseTimer.Interval = 17;
            // 
            // AddEventForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 21F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(80)))), ((int)(((byte)(80)))), ((int)(((byte)(80)))));
            this.ClientSize = new System.Drawing.Size(354, 453);
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
            this.InputLayout.ResumeLayout(false);
            this.InputLayout.PerformLayout();
            this.DateErrorLayout.ResumeLayout(false);
            this.DateErrorLayout.PerformLayout();
            this.TitleInputLayout.ResumeLayout(false);
            this.TitleInputLayout.PerformLayout();
            this.DateInputLayout.ResumeLayout(false);
            this.DateInputLayout.PerformLayout();
            this.TitleErrorLayout.ResumeLayout(false);
            this.TitleErrorLayout.PerformLayout();
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
        private System.Windows.Forms.TableLayoutPanel InputLayout;
        private System.Windows.Forms.TableLayoutPanel TitleInputLayout;
        private System.Windows.Forms.TableLayoutPanel DateInputLayout;
        private System.Windows.Forms.RichTextBox EventDetail;
        private System.Windows.Forms.Label EventDetailLabel;
        private System.Windows.Forms.Label DateLabel;
        private System.Windows.Forms.Label TitleLabel;
        private System.Windows.Forms.TextBox EventTitle;
        private System.Windows.Forms.DateTimePicker EventDate;
        private System.Windows.Forms.TableLayoutPanel TitleErrorLayout;
        private System.Windows.Forms.TableLayoutPanel DateErrorLayout;
        private System.Windows.Forms.Label DateErrorLabel;
        private System.Windows.Forms.Label TitleErrorLabel;
        private System.Windows.Forms.Timer CloseTimer;

    }
}