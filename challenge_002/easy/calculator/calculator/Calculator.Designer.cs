namespace calculator {
    partial class Calculator {
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
            this.MainLayout = new System.Windows.Forms.TableLayoutPanel();
            this.KeyLayout = new System.Windows.Forms.TableLayoutPanel();
            this.ClearEntry = new System.Windows.Forms.Button();
            this.ClearAll = new System.Windows.Forms.Button();
            this.Delete = new System.Windows.Forms.Button();
            this.Divide = new System.Windows.Forms.Button();
            this.Seven = new System.Windows.Forms.Button();
            this.Eight = new System.Windows.Forms.Button();
            this.Nine = new System.Windows.Forms.Button();
            this.Multiply = new System.Windows.Forms.Button();
            this.Four = new System.Windows.Forms.Button();
            this.Five = new System.Windows.Forms.Button();
            this.Six = new System.Windows.Forms.Button();
            this.Minus = new System.Windows.Forms.Button();
            this.One = new System.Windows.Forms.Button();
            this.Two = new System.Windows.Forms.Button();
            this.Three = new System.Windows.Forms.Button();
            this.Plus = new System.Windows.Forms.Button();
            this.Negate = new System.Windows.Forms.Button();
            this.Zero = new System.Windows.Forms.Button();
            this.Dot = new System.Windows.Forms.Button();
            this.Equal = new System.Windows.Forms.Button();
            this.EquationPanel = new System.Windows.Forms.Panel();
            this.Equation = new System.Windows.Forms.Label();
            this.DisplayLayout = new System.Windows.Forms.TableLayoutPanel();
            this.DisplayPanel = new System.Windows.Forms.Panel();
            this.Display = new System.Windows.Forms.Label();
            this.MainLayout.SuspendLayout();
            this.KeyLayout.SuspendLayout();
            this.EquationPanel.SuspendLayout();
            this.DisplayLayout.SuspendLayout();
            this.DisplayPanel.SuspendLayout();
            this.SuspendLayout();
            // 
            // MainLayout
            // 
            this.MainLayout.ColumnCount = 1;
            this.MainLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.MainLayout.Controls.Add(this.KeyLayout, 0, 2);
            this.MainLayout.Controls.Add(this.DisplayLayout, 0, 1);
            this.MainLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MainLayout.Location = new System.Drawing.Point(0, 0);
            this.MainLayout.Margin = new System.Windows.Forms.Padding(0);
            this.MainLayout.Name = "MainLayout";
            this.MainLayout.RowCount = 3;
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 6.436781F));
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 23.90805F));
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 69.42529F));
            this.MainLayout.Size = new System.Drawing.Size(349, 435);
            this.MainLayout.TabIndex = 0;
            // 
            // KeyLayout
            // 
            this.KeyLayout.ColumnCount = 4;
            this.KeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.KeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.KeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.KeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.KeyLayout.Controls.Add(this.Equal, 3, 4);
            this.KeyLayout.Controls.Add(this.Dot, 2, 4);
            this.KeyLayout.Controls.Add(this.Zero, 1, 4);
            this.KeyLayout.Controls.Add(this.Negate, 0, 4);
            this.KeyLayout.Controls.Add(this.Plus, 3, 3);
            this.KeyLayout.Controls.Add(this.Three, 2, 3);
            this.KeyLayout.Controls.Add(this.Two, 1, 3);
            this.KeyLayout.Controls.Add(this.One, 0, 3);
            this.KeyLayout.Controls.Add(this.Minus, 3, 2);
            this.KeyLayout.Controls.Add(this.Six, 2, 2);
            this.KeyLayout.Controls.Add(this.Five, 1, 2);
            this.KeyLayout.Controls.Add(this.Four, 0, 2);
            this.KeyLayout.Controls.Add(this.Multiply, 3, 1);
            this.KeyLayout.Controls.Add(this.Nine, 2, 1);
            this.KeyLayout.Controls.Add(this.Eight, 1, 1);
            this.KeyLayout.Controls.Add(this.Seven, 0, 1);
            this.KeyLayout.Controls.Add(this.Divide, 3, 0);
            this.KeyLayout.Controls.Add(this.Delete, 2, 0);
            this.KeyLayout.Controls.Add(this.ClearAll, 1, 0);
            this.KeyLayout.Controls.Add(this.ClearEntry, 0, 0);
            this.KeyLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.KeyLayout.Location = new System.Drawing.Point(0, 132);
            this.KeyLayout.Margin = new System.Windows.Forms.Padding(0);
            this.KeyLayout.Name = "KeyLayout";
            this.KeyLayout.Padding = new System.Windows.Forms.Padding(3);
            this.KeyLayout.RowCount = 5;
            this.KeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.KeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.KeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.KeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.KeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.KeyLayout.Size = new System.Drawing.Size(349, 303);
            this.KeyLayout.TabIndex = 1;
            // 
            // ClearEntry
            // 
            this.ClearEntry.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.ClearEntry.Dock = System.Windows.Forms.DockStyle.Fill;
            this.ClearEntry.FlatAppearance.BorderSize = 0;
            this.ClearEntry.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.ClearEntry.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.ClearEntry.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.ClearEntry.Location = new System.Drawing.Point(5, 5);
            this.ClearEntry.Margin = new System.Windows.Forms.Padding(2);
            this.ClearEntry.Name = "ClearEntry";
            this.ClearEntry.Size = new System.Drawing.Size(81, 55);
            this.ClearEntry.TabIndex = 0;
            this.ClearEntry.Tag = "clearEntry";
            this.ClearEntry.Text = "CE";
            this.ClearEntry.UseVisualStyleBackColor = false;
            this.ClearEntry.Click += new System.EventHandler(this.HandleInput);
            this.ClearEntry.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.ClearEntry.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // ClearAll
            // 
            this.ClearAll.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.ClearAll.Dock = System.Windows.Forms.DockStyle.Fill;
            this.ClearAll.FlatAppearance.BorderSize = 0;
            this.ClearAll.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.ClearAll.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.ClearAll.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.ClearAll.Location = new System.Drawing.Point(90, 5);
            this.ClearAll.Margin = new System.Windows.Forms.Padding(2);
            this.ClearAll.Name = "ClearAll";
            this.ClearAll.Size = new System.Drawing.Size(81, 55);
            this.ClearAll.TabIndex = 1;
            this.ClearAll.Tag = "clearAll";
            this.ClearAll.Text = "C";
            this.ClearAll.UseVisualStyleBackColor = false;
            this.ClearAll.Click += new System.EventHandler(this.HandleInput);
            this.ClearAll.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.ClearAll.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Delete
            // 
            this.Delete.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.Delete.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Delete.FlatAppearance.BorderSize = 0;
            this.Delete.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Delete.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Delete.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Delete.Location = new System.Drawing.Point(175, 5);
            this.Delete.Margin = new System.Windows.Forms.Padding(2);
            this.Delete.Name = "Delete";
            this.Delete.Size = new System.Drawing.Size(81, 55);
            this.Delete.TabIndex = 2;
            this.Delete.Tag = "delete";
            this.Delete.Text = "⌫";
            this.Delete.UseVisualStyleBackColor = false;
            this.Delete.Click += new System.EventHandler(this.HandleInput);
            this.Delete.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Delete.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Divide
            // 
            this.Divide.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.Divide.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Divide.FlatAppearance.BorderSize = 0;
            this.Divide.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Divide.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Divide.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Divide.Font = new System.Drawing.Font("Segoe UI", 17.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Divide.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.Divide.Location = new System.Drawing.Point(260, 5);
            this.Divide.Margin = new System.Windows.Forms.Padding(2);
            this.Divide.Name = "Divide";
            this.Divide.Size = new System.Drawing.Size(84, 55);
            this.Divide.TabIndex = 3;
            this.Divide.Tag = "/";
            this.Divide.Text = "÷";
            this.Divide.UseVisualStyleBackColor = false;
            this.Divide.Click += new System.EventHandler(this.HandleInput);
            this.Divide.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Divide.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Seven
            // 
            this.Seven.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.Seven.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Seven.FlatAppearance.BorderSize = 0;
            this.Seven.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Seven.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Seven.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Seven.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Seven.Location = new System.Drawing.Point(5, 64);
            this.Seven.Margin = new System.Windows.Forms.Padding(2);
            this.Seven.Name = "Seven";
            this.Seven.Size = new System.Drawing.Size(81, 55);
            this.Seven.TabIndex = 4;
            this.Seven.Tag = "7";
            this.Seven.Text = "7";
            this.Seven.UseVisualStyleBackColor = false;
            this.Seven.Click += new System.EventHandler(this.HandleInput);
            this.Seven.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Seven.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Eight
            // 
            this.Eight.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.Eight.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Eight.FlatAppearance.BorderSize = 0;
            this.Eight.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Eight.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Eight.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Eight.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Eight.Location = new System.Drawing.Point(90, 64);
            this.Eight.Margin = new System.Windows.Forms.Padding(2);
            this.Eight.Name = "Eight";
            this.Eight.Size = new System.Drawing.Size(81, 55);
            this.Eight.TabIndex = 5;
            this.Eight.Tag = "8";
            this.Eight.Text = "8";
            this.Eight.UseVisualStyleBackColor = false;
            this.Eight.Click += new System.EventHandler(this.HandleInput);
            this.Eight.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Eight.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Nine
            // 
            this.Nine.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.Nine.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Nine.FlatAppearance.BorderSize = 0;
            this.Nine.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Nine.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Nine.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Nine.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Nine.Location = new System.Drawing.Point(175, 64);
            this.Nine.Margin = new System.Windows.Forms.Padding(2);
            this.Nine.Name = "Nine";
            this.Nine.Size = new System.Drawing.Size(81, 55);
            this.Nine.TabIndex = 6;
            this.Nine.Tag = "9";
            this.Nine.Text = "9";
            this.Nine.UseVisualStyleBackColor = false;
            this.Nine.Click += new System.EventHandler(this.HandleInput);
            this.Nine.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Nine.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Multiply
            // 
            this.Multiply.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.Multiply.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Multiply.FlatAppearance.BorderSize = 0;
            this.Multiply.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Multiply.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Multiply.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Multiply.Font = new System.Drawing.Font("Segoe UI", 17.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Multiply.Location = new System.Drawing.Point(260, 64);
            this.Multiply.Margin = new System.Windows.Forms.Padding(2);
            this.Multiply.Name = "Multiply";
            this.Multiply.Size = new System.Drawing.Size(84, 55);
            this.Multiply.TabIndex = 7;
            this.Multiply.Tag = "*";
            this.Multiply.Text = "×";
            this.Multiply.UseVisualStyleBackColor = false;
            this.Multiply.Click += new System.EventHandler(this.HandleInput);
            this.Multiply.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Multiply.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Four
            // 
            this.Four.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.Four.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Four.FlatAppearance.BorderSize = 0;
            this.Four.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Four.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Four.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Four.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Four.Location = new System.Drawing.Point(5, 123);
            this.Four.Margin = new System.Windows.Forms.Padding(2);
            this.Four.Name = "Four";
            this.Four.Size = new System.Drawing.Size(81, 55);
            this.Four.TabIndex = 8;
            this.Four.Tag = "4";
            this.Four.Text = "4";
            this.Four.UseVisualStyleBackColor = false;
            this.Four.Click += new System.EventHandler(this.HandleInput);
            this.Four.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Four.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Five
            // 
            this.Five.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.Five.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Five.FlatAppearance.BorderSize = 0;
            this.Five.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Five.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Five.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Five.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Five.Location = new System.Drawing.Point(90, 123);
            this.Five.Margin = new System.Windows.Forms.Padding(2);
            this.Five.Name = "Five";
            this.Five.Size = new System.Drawing.Size(81, 55);
            this.Five.TabIndex = 9;
            this.Five.Tag = "5";
            this.Five.Text = "5";
            this.Five.UseVisualStyleBackColor = false;
            this.Five.Click += new System.EventHandler(this.HandleInput);
            this.Five.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Five.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Six
            // 
            this.Six.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.Six.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Six.FlatAppearance.BorderSize = 0;
            this.Six.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Six.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Six.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Six.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Six.Location = new System.Drawing.Point(175, 123);
            this.Six.Margin = new System.Windows.Forms.Padding(2);
            this.Six.Name = "Six";
            this.Six.Size = new System.Drawing.Size(81, 55);
            this.Six.TabIndex = 10;
            this.Six.Tag = "6";
            this.Six.Text = "6";
            this.Six.UseVisualStyleBackColor = false;
            this.Six.Click += new System.EventHandler(this.HandleInput);
            this.Six.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Six.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Minus
            // 
            this.Minus.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.Minus.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Minus.FlatAppearance.BorderSize = 0;
            this.Minus.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Minus.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Minus.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Minus.Font = new System.Drawing.Font("Segoe UI", 17.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Minus.Location = new System.Drawing.Point(260, 123);
            this.Minus.Margin = new System.Windows.Forms.Padding(2);
            this.Minus.Name = "Minus";
            this.Minus.Size = new System.Drawing.Size(84, 55);
            this.Minus.TabIndex = 11;
            this.Minus.Tag = "-";
            this.Minus.Text = "−";
            this.Minus.UseVisualStyleBackColor = false;
            this.Minus.Click += new System.EventHandler(this.HandleInput);
            this.Minus.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Minus.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // One
            // 
            this.One.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.One.Dock = System.Windows.Forms.DockStyle.Fill;
            this.One.FlatAppearance.BorderSize = 0;
            this.One.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.One.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.One.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.One.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.One.Location = new System.Drawing.Point(5, 182);
            this.One.Margin = new System.Windows.Forms.Padding(2);
            this.One.Name = "One";
            this.One.Size = new System.Drawing.Size(81, 55);
            this.One.TabIndex = 12;
            this.One.Tag = "1";
            this.One.Text = "1";
            this.One.UseVisualStyleBackColor = false;
            this.One.Click += new System.EventHandler(this.HandleInput);
            this.One.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.One.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Two
            // 
            this.Two.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.Two.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Two.FlatAppearance.BorderSize = 0;
            this.Two.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Two.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Two.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Two.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Two.Location = new System.Drawing.Point(90, 182);
            this.Two.Margin = new System.Windows.Forms.Padding(2);
            this.Two.Name = "Two";
            this.Two.Size = new System.Drawing.Size(81, 55);
            this.Two.TabIndex = 13;
            this.Two.Tag = "2";
            this.Two.Text = "2";
            this.Two.UseVisualStyleBackColor = false;
            this.Two.Click += new System.EventHandler(this.HandleInput);
            this.Two.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Two.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Three
            // 
            this.Three.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.Three.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Three.FlatAppearance.BorderSize = 0;
            this.Three.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Three.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Three.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Three.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Three.Location = new System.Drawing.Point(175, 182);
            this.Three.Margin = new System.Windows.Forms.Padding(2);
            this.Three.Name = "Three";
            this.Three.Size = new System.Drawing.Size(81, 55);
            this.Three.TabIndex = 14;
            this.Three.Tag = "3";
            this.Three.Text = "3";
            this.Three.UseVisualStyleBackColor = false;
            this.Three.Click += new System.EventHandler(this.HandleInput);
            this.Three.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Three.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Plus
            // 
            this.Plus.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.Plus.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Plus.FlatAppearance.BorderSize = 0;
            this.Plus.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Plus.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Plus.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Plus.Font = new System.Drawing.Font("Segoe UI", 17.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Plus.Location = new System.Drawing.Point(260, 182);
            this.Plus.Margin = new System.Windows.Forms.Padding(2);
            this.Plus.Name = "Plus";
            this.Plus.Size = new System.Drawing.Size(84, 55);
            this.Plus.TabIndex = 15;
            this.Plus.Tag = "+";
            this.Plus.Text = "+";
            this.Plus.UseVisualStyleBackColor = false;
            this.Plus.Click += new System.EventHandler(this.HandleInput);
            this.Plus.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Plus.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Negate
            // 
            this.Negate.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.Negate.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Negate.FlatAppearance.BorderSize = 0;
            this.Negate.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Negate.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Negate.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Negate.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Negate.Location = new System.Drawing.Point(5, 241);
            this.Negate.Margin = new System.Windows.Forms.Padding(2);
            this.Negate.Name = "Negate";
            this.Negate.Size = new System.Drawing.Size(81, 57);
            this.Negate.TabIndex = 16;
            this.Negate.Tag = "negate";
            this.Negate.Text = "±";
            this.Negate.UseVisualStyleBackColor = false;
            this.Negate.Click += new System.EventHandler(this.HandleInput);
            this.Negate.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Negate.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Zero
            // 
            this.Zero.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.Zero.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Zero.FlatAppearance.BorderSize = 0;
            this.Zero.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Zero.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Zero.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Zero.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Zero.Location = new System.Drawing.Point(90, 241);
            this.Zero.Margin = new System.Windows.Forms.Padding(2);
            this.Zero.Name = "Zero";
            this.Zero.Size = new System.Drawing.Size(81, 57);
            this.Zero.TabIndex = 17;
            this.Zero.Tag = "0";
            this.Zero.Text = "0";
            this.Zero.UseVisualStyleBackColor = false;
            this.Zero.Click += new System.EventHandler(this.HandleInput);
            this.Zero.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Zero.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Dot
            // 
            this.Dot.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.Dot.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Dot.FlatAppearance.BorderSize = 0;
            this.Dot.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Dot.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Dot.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Dot.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Dot.Location = new System.Drawing.Point(175, 241);
            this.Dot.Margin = new System.Windows.Forms.Padding(2);
            this.Dot.Name = "Dot";
            this.Dot.Size = new System.Drawing.Size(81, 57);
            this.Dot.TabIndex = 18;
            this.Dot.Tag = ".";
            this.Dot.Text = "∙";
            this.Dot.UseVisualStyleBackColor = false;
            this.Dot.Click += new System.EventHandler(this.HandleInput);
            this.Dot.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Dot.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Equal
            // 
            this.Equal.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.Equal.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Equal.FlatAppearance.BorderSize = 0;
            this.Equal.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.Equal.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(59)))), ((int)(((byte)(59)))));
            this.Equal.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Equal.Font = new System.Drawing.Font("Segoe UI", 17.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Equal.Location = new System.Drawing.Point(260, 241);
            this.Equal.Margin = new System.Windows.Forms.Padding(2);
            this.Equal.Name = "Equal";
            this.Equal.Size = new System.Drawing.Size(84, 57);
            this.Equal.TabIndex = 19;
            this.Equal.Tag = "=";
            this.Equal.Text = "=";
            this.Equal.UseVisualStyleBackColor = false;
            this.Equal.Click += new System.EventHandler(this.HandleInput);
            this.Equal.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.Equal.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // EquationPanel
            // 
            this.EquationPanel.Controls.Add(this.Equation);
            this.EquationPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.EquationPanel.Location = new System.Drawing.Point(0, 0);
            this.EquationPanel.Margin = new System.Windows.Forms.Padding(0);
            this.EquationPanel.Name = "EquationPanel";
            this.EquationPanel.Size = new System.Drawing.Size(349, 25);
            this.EquationPanel.TabIndex = 5;
            // 
            // Equation
            // 
            this.Equation.AutoSize = true;
            this.Equation.Dock = System.Windows.Forms.DockStyle.Right;
            this.Equation.Location = new System.Drawing.Point(349, 0);
            this.Equation.Margin = new System.Windows.Forms.Padding(0);
            this.Equation.Name = "Equation";
            this.Equation.Size = new System.Drawing.Size(0, 21);
            this.Equation.TabIndex = 0;
            // 
            // DisplayLayout
            // 
            this.DisplayLayout.ColumnCount = 1;
            this.DisplayLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.DisplayLayout.Controls.Add(this.DisplayPanel, 0, 1);
            this.DisplayLayout.Controls.Add(this.EquationPanel, 0, 0);
            this.DisplayLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.DisplayLayout.Location = new System.Drawing.Point(0, 28);
            this.DisplayLayout.Margin = new System.Windows.Forms.Padding(0);
            this.DisplayLayout.Name = "DisplayLayout";
            this.DisplayLayout.RowCount = 2;
            this.DisplayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 24.44444F));
            this.DisplayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 75.55556F));
            this.DisplayLayout.Size = new System.Drawing.Size(349, 104);
            this.DisplayLayout.TabIndex = 6;
            // 
            // DisplayPanel
            // 
            this.DisplayPanel.Controls.Add(this.Display);
            this.DisplayPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.DisplayPanel.Location = new System.Drawing.Point(0, 25);
            this.DisplayPanel.Margin = new System.Windows.Forms.Padding(0);
            this.DisplayPanel.Name = "DisplayPanel";
            this.DisplayPanel.Size = new System.Drawing.Size(349, 79);
            this.DisplayPanel.TabIndex = 5;
            // 
            // Display
            // 
            this.Display.AutoSize = true;
            this.Display.Dock = System.Windows.Forms.DockStyle.Right;
            this.Display.Font = new System.Drawing.Font("Segoe UI Semibold", 36F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Display.Location = new System.Drawing.Point(294, 0);
            this.Display.Margin = new System.Windows.Forms.Padding(0);
            this.Display.Name = "Display";
            this.Display.Size = new System.Drawing.Size(55, 65);
            this.Display.TabIndex = 3;
            this.Display.Text = "0";
            this.Display.Paint += new System.Windows.Forms.PaintEventHandler(this.ResizeDisplay);
            // 
            // Calculator
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 21F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(32)))), ((int)(((byte)(32)))), ((int)(((byte)(32)))));
            this.ClientSize = new System.Drawing.Size(349, 435);
            this.Controls.Add(this.MainLayout);
            this.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.MinimumSize = new System.Drawing.Size(300, 420);
            this.Name = "Calculator";
            this.ShowIcon = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Calculator";
            this.MainLayout.ResumeLayout(false);
            this.KeyLayout.ResumeLayout(false);
            this.EquationPanel.ResumeLayout(false);
            this.EquationPanel.PerformLayout();
            this.DisplayLayout.ResumeLayout(false);
            this.DisplayPanel.ResumeLayout(false);
            this.DisplayPanel.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel MainLayout;
        private System.Windows.Forms.TableLayoutPanel KeyLayout;
        private System.Windows.Forms.Button Equal;
        private System.Windows.Forms.Button Dot;
        private System.Windows.Forms.Button Zero;
        private System.Windows.Forms.Button Negate;
        private System.Windows.Forms.Button Plus;
        private System.Windows.Forms.Button Three;
        private System.Windows.Forms.Button Two;
        private System.Windows.Forms.Button One;
        private System.Windows.Forms.Button Minus;
        private System.Windows.Forms.Button Six;
        private System.Windows.Forms.Button Five;
        private System.Windows.Forms.Button Four;
        private System.Windows.Forms.Button Multiply;
        private System.Windows.Forms.Button Nine;
        private System.Windows.Forms.Button Eight;
        private System.Windows.Forms.Button Seven;
        private System.Windows.Forms.Button Divide;
        private System.Windows.Forms.Button Delete;
        private System.Windows.Forms.Button ClearAll;
        private System.Windows.Forms.Button ClearEntry;
        private System.Windows.Forms.Panel EquationPanel;
        private System.Windows.Forms.Label Equation;
        private System.Windows.Forms.TableLayoutPanel DisplayLayout;
        private System.Windows.Forms.Panel DisplayPanel;
        private System.Windows.Forms.Label Display;
    }
}