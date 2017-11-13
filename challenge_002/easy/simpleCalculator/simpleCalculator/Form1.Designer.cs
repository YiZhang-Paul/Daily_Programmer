namespace simpleCalculator {
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
            this.mainPanel = new System.Windows.Forms.Panel();
            this.mainLayout = new System.Windows.Forms.TableLayoutPanel();
            this.displayLayout = new System.Windows.Forms.TableLayoutPanel();
            this.topPanel = new System.Windows.Forms.TableLayoutPanel();
            this.dragPanel = new System.Windows.Forms.Panel();
            this.title = new System.Windows.Forms.Label();
            this.controlPanel = new System.Windows.Forms.TableLayoutPanel();
            this.btnMinimize = new System.Windows.Forms.Button();
            this.btnMaxNormal = new System.Windows.Forms.Button();
            this.btnExit = new System.Windows.Forms.Button();
            this.numberDisplay = new System.Windows.Forms.Label();
            this.equationDisplay = new System.Windows.Forms.Label();
            this.buttonLayout = new System.Windows.Forms.TableLayoutPanel();
            this.basicKeyPanel = new System.Windows.Forms.Panel();
            this.basicKeyLayout = new System.Windows.Forms.TableLayoutPanel();
            this.btnExtend = new System.Windows.Forms.Button();
            this.btnDivide = new System.Windows.Forms.Button();
            this.btnMultiply = new System.Windows.Forms.Button();
            this.btnMinus = new System.Windows.Forms.Button();
            this.btnPlus = new System.Windows.Forms.Button();
            this.btnEqual = new System.Windows.Forms.Button();
            this.btnClearLast = new System.Windows.Forms.Button();
            this.btnDot = new System.Windows.Forms.Button();
            this.btnThree = new System.Windows.Forms.Button();
            this.btnSix = new System.Windows.Forms.Button();
            this.btnNine = new System.Windows.Forms.Button();
            this.btnDelete = new System.Windows.Forms.Button();
            this.btnPI = new System.Windows.Forms.Button();
            this.btnZero = new System.Windows.Forms.Button();
            this.btnFactorial = new System.Windows.Forms.Button();
            this.btnRightParentheses = new System.Windows.Forms.Button();
            this.btnNegate = new System.Windows.Forms.Button();
            this.btnFive = new System.Windows.Forms.Button();
            this.btnTwo = new System.Windows.Forms.Button();
            this.btnEight = new System.Windows.Forms.Button();
            this.btnLeftParentheses = new System.Windows.Forms.Button();
            this.btnClearAll = new System.Windows.Forms.Button();
            this.btnOne = new System.Windows.Forms.Button();
            this.btnFour = new System.Windows.Forms.Button();
            this.btnSeven = new System.Windows.Forms.Button();
            this.panel1 = new System.Windows.Forms.Panel();
            this.extensionKeyPanel = new System.Windows.Forms.Panel();
            this.extensionKeyLayout = new System.Windows.Forms.TableLayoutPanel();
            this.btnReciprocal = new System.Windows.Forms.Button();
            this.btnLn = new System.Windows.Forms.Button();
            this.btnExponential = new System.Windows.Forms.Button();
            this.btnDegrees = new System.Windows.Forms.Button();
            this.btnDms = new System.Windows.Forms.Button();
            this.btnCosineMinusOne = new System.Windows.Forms.Button();
            this.btnTangentMinusOne = new System.Windows.Forms.Button();
            this.btnSineMinusOne = new System.Windows.Forms.Button();
            this.btnYthRoot = new System.Windows.Forms.Button();
            this.btnXCube = new System.Windows.Forms.Button();
            this.advancedKeyPanel = new System.Windows.Forms.Panel();
            this.advancedKeyLayout = new System.Windows.Forms.TableLayoutPanel();
            this.btnTangent = new System.Windows.Forms.Button();
            this.btnModulos = new System.Windows.Forms.Button();
            this.btnXSquare = new System.Windows.Forms.Button();
            this.btnExp = new System.Windows.Forms.Button();
            this.btnXPowerY = new System.Windows.Forms.Button();
            this.btnLog = new System.Windows.Forms.Button();
            this.btnCosine = new System.Windows.Forms.Button();
            this.btnSquareRoot = new System.Windows.Forms.Button();
            this.btnSine = new System.Windows.Forms.Button();
            this.btnTenPowerX = new System.Windows.Forms.Button();
            this.mainPanel.SuspendLayout();
            this.mainLayout.SuspendLayout();
            this.displayLayout.SuspendLayout();
            this.topPanel.SuspendLayout();
            this.dragPanel.SuspendLayout();
            this.controlPanel.SuspendLayout();
            this.buttonLayout.SuspendLayout();
            this.basicKeyPanel.SuspendLayout();
            this.basicKeyLayout.SuspendLayout();
            this.panel1.SuspendLayout();
            this.extensionKeyPanel.SuspendLayout();
            this.extensionKeyLayout.SuspendLayout();
            this.advancedKeyPanel.SuspendLayout();
            this.advancedKeyLayout.SuspendLayout();
            this.SuspendLayout();
            // 
            // mainPanel
            // 
            this.mainPanel.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(32)))), ((int)(((byte)(32)))), ((int)(((byte)(32)))));
            this.mainPanel.Controls.Add(this.mainLayout);
            this.mainPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.mainPanel.Location = new System.Drawing.Point(1, 1);
            this.mainPanel.Name = "mainPanel";
            this.mainPanel.Size = new System.Drawing.Size(351, 628);
            this.mainPanel.TabIndex = 0;
            // 
            // mainLayout
            // 
            this.mainLayout.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.mainLayout.ColumnCount = 1;
            this.mainLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.mainLayout.Controls.Add(this.displayLayout, 0, 0);
            this.mainLayout.Controls.Add(this.buttonLayout, 0, 1);
            this.mainLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.mainLayout.Location = new System.Drawing.Point(0, 0);
            this.mainLayout.Margin = new System.Windows.Forms.Padding(0);
            this.mainLayout.Name = "mainLayout";
            this.mainLayout.RowCount = 2;
            this.mainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 43.33333F));
            this.mainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 56.66667F));
            this.mainLayout.Size = new System.Drawing.Size(351, 628);
            this.mainLayout.TabIndex = 1;
            // 
            // displayLayout
            // 
            this.displayLayout.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.displayLayout.ColumnCount = 1;
            this.displayLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.displayLayout.Controls.Add(this.topPanel, 0, 0);
            this.displayLayout.Controls.Add(this.numberDisplay, 0, 3);
            this.displayLayout.Controls.Add(this.equationDisplay, 0, 2);
            this.displayLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.displayLayout.Location = new System.Drawing.Point(0, 0);
            this.displayLayout.Margin = new System.Windows.Forms.Padding(0);
            this.displayLayout.Name = "displayLayout";
            this.displayLayout.RowCount = 6;
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 11.76471F));
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 13.60294F));
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 11.39706F));
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 31.98529F));
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 15.44118F));
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 15.07353F));
            this.displayLayout.Size = new System.Drawing.Size(351, 272);
            this.displayLayout.TabIndex = 1;
            // 
            // topPanel
            // 
            this.topPanel.ColumnCount = 2;
            this.topPanel.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 61.64384F));
            this.topPanel.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 38.35616F));
            this.topPanel.Controls.Add(this.dragPanel, 0, 0);
            this.topPanel.Controls.Add(this.controlPanel, 1, 0);
            this.topPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.topPanel.Location = new System.Drawing.Point(0, 0);
            this.topPanel.Margin = new System.Windows.Forms.Padding(0);
            this.topPanel.Name = "topPanel";
            this.topPanel.RowCount = 1;
            this.topPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.topPanel.Size = new System.Drawing.Size(351, 32);
            this.topPanel.TabIndex = 1;
            // 
            // dragPanel
            // 
            this.dragPanel.Controls.Add(this.title);
            this.dragPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dragPanel.Location = new System.Drawing.Point(0, 0);
            this.dragPanel.Margin = new System.Windows.Forms.Padding(0);
            this.dragPanel.Name = "dragPanel";
            this.dragPanel.Size = new System.Drawing.Size(216, 32);
            this.dragPanel.TabIndex = 0;
            this.dragPanel.DoubleClick += new System.EventHandler(this.ToggleSize);
            this.dragPanel.MouseDown += new System.Windows.Forms.MouseEventHandler(this.GetMouseXY);
            this.dragPanel.MouseMove += new System.Windows.Forms.MouseEventHandler(this.Drag);
            // 
            // title
            // 
            this.title.AutoSize = true;
            this.title.Dock = System.Windows.Forms.DockStyle.Left;
            this.title.Location = new System.Drawing.Point(0, 0);
            this.title.Margin = new System.Windows.Forms.Padding(3);
            this.title.Name = "title";
            this.title.Padding = new System.Windows.Forms.Padding(9, 6, 6, 6);
            this.title.Size = new System.Drawing.Size(83, 29);
            this.title.TabIndex = 0;
            this.title.Text = "Calculator";
            this.title.DoubleClick += new System.EventHandler(this.ToggleSize);
            this.title.MouseDown += new System.Windows.Forms.MouseEventHandler(this.GetMouseXY);
            this.title.MouseMove += new System.Windows.Forms.MouseEventHandler(this.Drag);
            // 
            // controlPanel
            // 
            this.controlPanel.ColumnCount = 3;
            this.controlPanel.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 33.33333F));
            this.controlPanel.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 33.33333F));
            this.controlPanel.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 33.33333F));
            this.controlPanel.Controls.Add(this.btnMinimize, 0, 0);
            this.controlPanel.Controls.Add(this.btnMaxNormal, 1, 0);
            this.controlPanel.Controls.Add(this.btnExit, 2, 0);
            this.controlPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.controlPanel.Location = new System.Drawing.Point(216, 0);
            this.controlPanel.Margin = new System.Windows.Forms.Padding(0);
            this.controlPanel.Name = "controlPanel";
            this.controlPanel.RowCount = 1;
            this.controlPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.controlPanel.Size = new System.Drawing.Size(135, 32);
            this.controlPanel.TabIndex = 1;
            // 
            // btnMinimize
            // 
            this.btnMinimize.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnMinimize.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnMinimize.FlatAppearance.BorderSize = 0;
            this.btnMinimize.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnMinimize.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnMinimize.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnMinimize.ForeColor = System.Drawing.SystemColors.ButtonShadow;
            this.btnMinimize.Location = new System.Drawing.Point(0, 0);
            this.btnMinimize.Margin = new System.Windows.Forms.Padding(0);
            this.btnMinimize.Name = "btnMinimize";
            this.btnMinimize.Size = new System.Drawing.Size(45, 32);
            this.btnMinimize.TabIndex = 0;
            this.btnMinimize.Text = "➖";
            this.btnMinimize.UseVisualStyleBackColor = true;
            this.btnMinimize.Click += new System.EventHandler(this.Minimize);
            // 
            // btnMaxNormal
            // 
            this.btnMaxNormal.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnMaxNormal.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnMaxNormal.FlatAppearance.BorderSize = 0;
            this.btnMaxNormal.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnMaxNormal.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnMaxNormal.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnMaxNormal.ForeColor = System.Drawing.SystemColors.ButtonShadow;
            this.btnMaxNormal.Location = new System.Drawing.Point(45, 0);
            this.btnMaxNormal.Margin = new System.Windows.Forms.Padding(0);
            this.btnMaxNormal.Name = "btnMaxNormal";
            this.btnMaxNormal.Size = new System.Drawing.Size(45, 32);
            this.btnMaxNormal.TabIndex = 1;
            this.btnMaxNormal.Text = "⬜";
            this.btnMaxNormal.UseVisualStyleBackColor = true;
            this.btnMaxNormal.Click += new System.EventHandler(this.ToggleSize);
            // 
            // btnExit
            // 
            this.btnExit.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnExit.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnExit.FlatAppearance.BorderSize = 0;
            this.btnExit.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(128)))), ((int)(((byte)(128)))));
            this.btnExit.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Red;
            this.btnExit.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnExit.ForeColor = System.Drawing.SystemColors.ButtonShadow;
            this.btnExit.Location = new System.Drawing.Point(90, 0);
            this.btnExit.Margin = new System.Windows.Forms.Padding(0);
            this.btnExit.Name = "btnExit";
            this.btnExit.Size = new System.Drawing.Size(45, 32);
            this.btnExit.TabIndex = 2;
            this.btnExit.Text = "✕";
            this.btnExit.UseVisualStyleBackColor = true;
            this.btnExit.Click += new System.EventHandler(this.Exit);
            // 
            // numberDisplay
            // 
            this.numberDisplay.AutoSize = true;
            this.numberDisplay.Dock = System.Windows.Forms.DockStyle.Right;
            this.numberDisplay.Font = new System.Drawing.Font("Segoe UI Semibold", 36F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.numberDisplay.Location = new System.Drawing.Point(293, 100);
            this.numberDisplay.Name = "numberDisplay";
            this.numberDisplay.Size = new System.Drawing.Size(55, 87);
            this.numberDisplay.TabIndex = 0;
            this.numberDisplay.Text = "0";
            // 
            // equationDisplay
            // 
            this.equationDisplay.AutoSize = true;
            this.equationDisplay.Dock = System.Windows.Forms.DockStyle.Right;
            this.equationDisplay.Location = new System.Drawing.Point(348, 69);
            this.equationDisplay.Name = "equationDisplay";
            this.equationDisplay.Size = new System.Drawing.Size(0, 31);
            this.equationDisplay.TabIndex = 2;
            this.equationDisplay.TextAlign = System.Drawing.ContentAlignment.BottomRight;
            // 
            // buttonLayout
            // 
            this.buttonLayout.ColumnCount = 1;
            this.buttonLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.buttonLayout.Controls.Add(this.basicKeyPanel, 0, 1);
            this.buttonLayout.Controls.Add(this.panel1, 0, 0);
            this.buttonLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.buttonLayout.Location = new System.Drawing.Point(3, 275);
            this.buttonLayout.Name = "buttonLayout";
            this.buttonLayout.RowCount = 2;
            this.buttonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 28.57F));
            this.buttonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 71.43F));
            this.buttonLayout.Size = new System.Drawing.Size(345, 350);
            this.buttonLayout.TabIndex = 2;
            // 
            // basicKeyPanel
            // 
            this.basicKeyPanel.Controls.Add(this.basicKeyLayout);
            this.basicKeyPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.basicKeyPanel.Location = new System.Drawing.Point(0, 99);
            this.basicKeyPanel.Margin = new System.Windows.Forms.Padding(0);
            this.basicKeyPanel.Name = "basicKeyPanel";
            this.basicKeyPanel.Size = new System.Drawing.Size(345, 251);
            this.basicKeyPanel.TabIndex = 0;
            // 
            // basicKeyLayout
            // 
            this.basicKeyLayout.ColumnCount = 5;
            this.basicKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.basicKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.basicKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.basicKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.basicKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.basicKeyLayout.Controls.Add(this.btnExtend, 0, 0);
            this.basicKeyLayout.Controls.Add(this.btnDivide, 4, 0);
            this.basicKeyLayout.Controls.Add(this.btnMultiply, 4, 1);
            this.basicKeyLayout.Controls.Add(this.btnMinus, 4, 2);
            this.basicKeyLayout.Controls.Add(this.btnPlus, 4, 3);
            this.basicKeyLayout.Controls.Add(this.btnEqual, 4, 4);
            this.basicKeyLayout.Controls.Add(this.btnClearLast, 1, 0);
            this.basicKeyLayout.Controls.Add(this.btnDot, 3, 4);
            this.basicKeyLayout.Controls.Add(this.btnThree, 3, 3);
            this.basicKeyLayout.Controls.Add(this.btnSix, 3, 2);
            this.basicKeyLayout.Controls.Add(this.btnNine, 3, 1);
            this.basicKeyLayout.Controls.Add(this.btnDelete, 3, 0);
            this.basicKeyLayout.Controls.Add(this.btnPI, 0, 1);
            this.basicKeyLayout.Controls.Add(this.btnZero, 2, 4);
            this.basicKeyLayout.Controls.Add(this.btnFactorial, 0, 2);
            this.basicKeyLayout.Controls.Add(this.btnRightParentheses, 1, 4);
            this.basicKeyLayout.Controls.Add(this.btnNegate, 0, 3);
            this.basicKeyLayout.Controls.Add(this.btnFive, 2, 2);
            this.basicKeyLayout.Controls.Add(this.btnTwo, 2, 3);
            this.basicKeyLayout.Controls.Add(this.btnEight, 2, 1);
            this.basicKeyLayout.Controls.Add(this.btnLeftParentheses, 0, 4);
            this.basicKeyLayout.Controls.Add(this.btnClearAll, 2, 0);
            this.basicKeyLayout.Controls.Add(this.btnOne, 1, 3);
            this.basicKeyLayout.Controls.Add(this.btnFour, 1, 2);
            this.basicKeyLayout.Controls.Add(this.btnSeven, 1, 1);
            this.basicKeyLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.basicKeyLayout.Location = new System.Drawing.Point(0, 0);
            this.basicKeyLayout.Name = "basicKeyLayout";
            this.basicKeyLayout.RowCount = 5;
            this.basicKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.basicKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.basicKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.basicKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.basicKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.basicKeyLayout.Size = new System.Drawing.Size(345, 251);
            this.basicKeyLayout.TabIndex = 0;
            // 
            // btnExtend
            // 
            this.btnExtend.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnExtend.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnExtend.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnExtend.FlatAppearance.BorderSize = 0;
            this.btnExtend.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnExtend.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnExtend.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnExtend.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnExtend.Location = new System.Drawing.Point(2, 2);
            this.btnExtend.Margin = new System.Windows.Forms.Padding(2);
            this.btnExtend.Name = "btnExtend";
            this.btnExtend.Size = new System.Drawing.Size(65, 46);
            this.btnExtend.TabIndex = 10;
            this.btnExtend.Text = "⬆";
            this.btnExtend.UseVisualStyleBackColor = false;
            this.btnExtend.Click += new System.EventHandler(this.ToggleExtension);
            this.btnExtend.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnExtend.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnDivide
            // 
            this.btnDivide.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnDivide.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnDivide.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnDivide.FlatAppearance.BorderSize = 0;
            this.btnDivide.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnDivide.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnDivide.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnDivide.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDivide.Location = new System.Drawing.Point(278, 2);
            this.btnDivide.Margin = new System.Windows.Forms.Padding(2);
            this.btnDivide.Name = "btnDivide";
            this.btnDivide.Size = new System.Drawing.Size(65, 46);
            this.btnDivide.TabIndex = 14;
            this.btnDivide.Text = "÷";
            this.btnDivide.UseVisualStyleBackColor = false;
            this.btnDivide.Click += new System.EventHandler(this.btnDivide_Click);
            this.btnDivide.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnDivide.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnMultiply
            // 
            this.btnMultiply.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnMultiply.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnMultiply.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnMultiply.FlatAppearance.BorderSize = 0;
            this.btnMultiply.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnMultiply.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnMultiply.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnMultiply.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnMultiply.Location = new System.Drawing.Point(278, 52);
            this.btnMultiply.Margin = new System.Windows.Forms.Padding(2);
            this.btnMultiply.Name = "btnMultiply";
            this.btnMultiply.Size = new System.Drawing.Size(65, 46);
            this.btnMultiply.TabIndex = 19;
            this.btnMultiply.Text = "×";
            this.btnMultiply.UseVisualStyleBackColor = false;
            this.btnMultiply.Click += new System.EventHandler(this.btnMultiply_Click);
            this.btnMultiply.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnMultiply.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnMinus
            // 
            this.btnMinus.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnMinus.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnMinus.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnMinus.FlatAppearance.BorderSize = 0;
            this.btnMinus.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnMinus.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnMinus.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnMinus.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnMinus.Location = new System.Drawing.Point(278, 102);
            this.btnMinus.Margin = new System.Windows.Forms.Padding(2);
            this.btnMinus.Name = "btnMinus";
            this.btnMinus.Size = new System.Drawing.Size(65, 46);
            this.btnMinus.TabIndex = 24;
            this.btnMinus.Text = "−";
            this.btnMinus.UseVisualStyleBackColor = false;
            this.btnMinus.Click += new System.EventHandler(this.btnMinus_Click);
            this.btnMinus.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnMinus.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnPlus
            // 
            this.btnPlus.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnPlus.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnPlus.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnPlus.FlatAppearance.BorderSize = 0;
            this.btnPlus.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnPlus.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnPlus.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnPlus.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnPlus.Location = new System.Drawing.Point(278, 152);
            this.btnPlus.Margin = new System.Windows.Forms.Padding(2);
            this.btnPlus.Name = "btnPlus";
            this.btnPlus.Size = new System.Drawing.Size(65, 46);
            this.btnPlus.TabIndex = 29;
            this.btnPlus.Text = "+";
            this.btnPlus.UseVisualStyleBackColor = false;
            this.btnPlus.Click += new System.EventHandler(this.btnPlus_Click);
            this.btnPlus.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnPlus.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnEqual
            // 
            this.btnEqual.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnEqual.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnEqual.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnEqual.FlatAppearance.BorderSize = 0;
            this.btnEqual.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnEqual.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnEqual.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnEqual.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnEqual.Location = new System.Drawing.Point(278, 202);
            this.btnEqual.Margin = new System.Windows.Forms.Padding(2);
            this.btnEqual.Name = "btnEqual";
            this.btnEqual.Size = new System.Drawing.Size(65, 47);
            this.btnEqual.TabIndex = 34;
            this.btnEqual.Text = "=";
            this.btnEqual.UseVisualStyleBackColor = false;
            this.btnEqual.Click += new System.EventHandler(this.btnEqual_Click);
            this.btnEqual.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnEqual.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnClearLast
            // 
            this.btnClearLast.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnClearLast.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnClearLast.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnClearLast.FlatAppearance.BorderSize = 0;
            this.btnClearLast.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnClearLast.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnClearLast.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnClearLast.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnClearLast.Location = new System.Drawing.Point(71, 2);
            this.btnClearLast.Margin = new System.Windows.Forms.Padding(2);
            this.btnClearLast.Name = "btnClearLast";
            this.btnClearLast.Size = new System.Drawing.Size(65, 46);
            this.btnClearLast.TabIndex = 11;
            this.btnClearLast.Text = "CE";
            this.btnClearLast.UseVisualStyleBackColor = false;
            this.btnClearLast.Click += new System.EventHandler(this.ClearLastEntry);
            this.btnClearLast.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnClearLast.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnDot
            // 
            this.btnDot.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnDot.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnDot.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnDot.FlatAppearance.BorderSize = 0;
            this.btnDot.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnDot.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnDot.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnDot.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDot.Location = new System.Drawing.Point(209, 202);
            this.btnDot.Margin = new System.Windows.Forms.Padding(2);
            this.btnDot.Name = "btnDot";
            this.btnDot.Size = new System.Drawing.Size(65, 47);
            this.btnDot.TabIndex = 33;
            this.btnDot.Text = "∙";
            this.btnDot.UseVisualStyleBackColor = false;
            this.btnDot.Click += new System.EventHandler(this.btnDot_Click);
            this.btnDot.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnDot.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnThree
            // 
            this.btnThree.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnThree.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnThree.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnThree.FlatAppearance.BorderSize = 0;
            this.btnThree.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnThree.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnThree.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnThree.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnThree.Location = new System.Drawing.Point(209, 152);
            this.btnThree.Margin = new System.Windows.Forms.Padding(2);
            this.btnThree.Name = "btnThree";
            this.btnThree.Size = new System.Drawing.Size(65, 46);
            this.btnThree.TabIndex = 28;
            this.btnThree.Text = "3";
            this.btnThree.UseVisualStyleBackColor = false;
            this.btnThree.Click += new System.EventHandler(this.btnThree_Click);
            this.btnThree.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnThree.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnSix
            // 
            this.btnSix.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnSix.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnSix.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnSix.FlatAppearance.BorderSize = 0;
            this.btnSix.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnSix.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnSix.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnSix.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSix.Location = new System.Drawing.Point(209, 102);
            this.btnSix.Margin = new System.Windows.Forms.Padding(2);
            this.btnSix.Name = "btnSix";
            this.btnSix.Size = new System.Drawing.Size(65, 46);
            this.btnSix.TabIndex = 23;
            this.btnSix.Text = "6";
            this.btnSix.UseVisualStyleBackColor = false;
            this.btnSix.Click += new System.EventHandler(this.btnSix_Click);
            this.btnSix.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnSix.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnNine
            // 
            this.btnNine.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnNine.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnNine.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnNine.FlatAppearance.BorderSize = 0;
            this.btnNine.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnNine.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnNine.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnNine.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnNine.Location = new System.Drawing.Point(209, 52);
            this.btnNine.Margin = new System.Windows.Forms.Padding(2);
            this.btnNine.Name = "btnNine";
            this.btnNine.Size = new System.Drawing.Size(65, 46);
            this.btnNine.TabIndex = 18;
            this.btnNine.Text = "9";
            this.btnNine.UseVisualStyleBackColor = false;
            this.btnNine.Click += new System.EventHandler(this.btnNine_Click);
            this.btnNine.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnNine.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnDelete
            // 
            this.btnDelete.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnDelete.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnDelete.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnDelete.FlatAppearance.BorderSize = 0;
            this.btnDelete.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnDelete.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnDelete.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnDelete.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDelete.Location = new System.Drawing.Point(209, 2);
            this.btnDelete.Margin = new System.Windows.Forms.Padding(2);
            this.btnDelete.Name = "btnDelete";
            this.btnDelete.Size = new System.Drawing.Size(65, 46);
            this.btnDelete.TabIndex = 13;
            this.btnDelete.Text = "⌫";
            this.btnDelete.UseVisualStyleBackColor = false;
            this.btnDelete.Click += new System.EventHandler(this.ClearLastInput);
            this.btnDelete.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnDelete.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnPI
            // 
            this.btnPI.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnPI.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnPI.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnPI.FlatAppearance.BorderSize = 0;
            this.btnPI.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnPI.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnPI.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnPI.Font = new System.Drawing.Font("Segoe UI", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnPI.Location = new System.Drawing.Point(2, 52);
            this.btnPI.Margin = new System.Windows.Forms.Padding(2);
            this.btnPI.Name = "btnPI";
            this.btnPI.Size = new System.Drawing.Size(65, 46);
            this.btnPI.TabIndex = 15;
            this.btnPI.Text = "π";
            this.btnPI.UseVisualStyleBackColor = false;
            this.btnPI.Click += new System.EventHandler(this.btnPI_Click);
            this.btnPI.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnPI.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnZero
            // 
            this.btnZero.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnZero.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnZero.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnZero.FlatAppearance.BorderSize = 0;
            this.btnZero.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnZero.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnZero.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnZero.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnZero.Location = new System.Drawing.Point(140, 202);
            this.btnZero.Margin = new System.Windows.Forms.Padding(2);
            this.btnZero.Name = "btnZero";
            this.btnZero.Size = new System.Drawing.Size(65, 47);
            this.btnZero.TabIndex = 32;
            this.btnZero.Text = "0";
            this.btnZero.UseVisualStyleBackColor = false;
            this.btnZero.Click += new System.EventHandler(this.btnZero_Click);
            this.btnZero.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnZero.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnFactorial
            // 
            this.btnFactorial.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnFactorial.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnFactorial.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnFactorial.FlatAppearance.BorderSize = 0;
            this.btnFactorial.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnFactorial.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnFactorial.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnFactorial.Font = new System.Drawing.Font("Segoe UI", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnFactorial.Location = new System.Drawing.Point(2, 102);
            this.btnFactorial.Margin = new System.Windows.Forms.Padding(2);
            this.btnFactorial.Name = "btnFactorial";
            this.btnFactorial.Size = new System.Drawing.Size(65, 46);
            this.btnFactorial.TabIndex = 20;
            this.btnFactorial.Text = "n!";
            this.btnFactorial.UseVisualStyleBackColor = false;
            this.btnFactorial.Click += new System.EventHandler(this.btnFactorial_Click);
            this.btnFactorial.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnFactorial.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnRightParentheses
            // 
            this.btnRightParentheses.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnRightParentheses.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnRightParentheses.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnRightParentheses.FlatAppearance.BorderSize = 0;
            this.btnRightParentheses.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnRightParentheses.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnRightParentheses.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnRightParentheses.Font = new System.Drawing.Font("Segoe UI", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnRightParentheses.Location = new System.Drawing.Point(71, 202);
            this.btnRightParentheses.Margin = new System.Windows.Forms.Padding(2);
            this.btnRightParentheses.Name = "btnRightParentheses";
            this.btnRightParentheses.Size = new System.Drawing.Size(65, 47);
            this.btnRightParentheses.TabIndex = 31;
            this.btnRightParentheses.Text = ")";
            this.btnRightParentheses.UseVisualStyleBackColor = false;
            this.btnRightParentheses.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnRightParentheses.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnNegate
            // 
            this.btnNegate.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnNegate.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnNegate.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnNegate.FlatAppearance.BorderSize = 0;
            this.btnNegate.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnNegate.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnNegate.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnNegate.Font = new System.Drawing.Font("Segoe UI", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnNegate.Location = new System.Drawing.Point(2, 152);
            this.btnNegate.Margin = new System.Windows.Forms.Padding(2);
            this.btnNegate.Name = "btnNegate";
            this.btnNegate.Size = new System.Drawing.Size(65, 46);
            this.btnNegate.TabIndex = 25;
            this.btnNegate.Text = "±";
            this.btnNegate.UseVisualStyleBackColor = false;
            this.btnNegate.Click += new System.EventHandler(this.btnNegate_Click);
            this.btnNegate.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnNegate.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnFive
            // 
            this.btnFive.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnFive.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnFive.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnFive.FlatAppearance.BorderSize = 0;
            this.btnFive.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnFive.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnFive.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnFive.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnFive.Location = new System.Drawing.Point(140, 102);
            this.btnFive.Margin = new System.Windows.Forms.Padding(2);
            this.btnFive.Name = "btnFive";
            this.btnFive.Size = new System.Drawing.Size(65, 46);
            this.btnFive.TabIndex = 22;
            this.btnFive.Text = "5";
            this.btnFive.UseVisualStyleBackColor = false;
            this.btnFive.Click += new System.EventHandler(this.btnFive_Click);
            this.btnFive.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnFive.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnTwo
            // 
            this.btnTwo.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnTwo.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnTwo.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnTwo.FlatAppearance.BorderSize = 0;
            this.btnTwo.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnTwo.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnTwo.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnTwo.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnTwo.Location = new System.Drawing.Point(140, 152);
            this.btnTwo.Margin = new System.Windows.Forms.Padding(2);
            this.btnTwo.Name = "btnTwo";
            this.btnTwo.Size = new System.Drawing.Size(65, 46);
            this.btnTwo.TabIndex = 27;
            this.btnTwo.Text = "2";
            this.btnTwo.UseVisualStyleBackColor = false;
            this.btnTwo.Click += new System.EventHandler(this.btnTwo_Click);
            this.btnTwo.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnTwo.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnEight
            // 
            this.btnEight.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnEight.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnEight.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnEight.FlatAppearance.BorderSize = 0;
            this.btnEight.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnEight.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnEight.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnEight.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnEight.Location = new System.Drawing.Point(140, 52);
            this.btnEight.Margin = new System.Windows.Forms.Padding(2);
            this.btnEight.Name = "btnEight";
            this.btnEight.Size = new System.Drawing.Size(65, 46);
            this.btnEight.TabIndex = 17;
            this.btnEight.Text = "8";
            this.btnEight.UseVisualStyleBackColor = false;
            this.btnEight.Click += new System.EventHandler(this.btnEight_Click);
            this.btnEight.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnEight.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnLeftParentheses
            // 
            this.btnLeftParentheses.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnLeftParentheses.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnLeftParentheses.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnLeftParentheses.FlatAppearance.BorderSize = 0;
            this.btnLeftParentheses.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnLeftParentheses.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnLeftParentheses.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnLeftParentheses.Font = new System.Drawing.Font("Segoe UI", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnLeftParentheses.Location = new System.Drawing.Point(2, 202);
            this.btnLeftParentheses.Margin = new System.Windows.Forms.Padding(2);
            this.btnLeftParentheses.Name = "btnLeftParentheses";
            this.btnLeftParentheses.Size = new System.Drawing.Size(65, 47);
            this.btnLeftParentheses.TabIndex = 30;
            this.btnLeftParentheses.Text = "(";
            this.btnLeftParentheses.UseVisualStyleBackColor = false;
            this.btnLeftParentheses.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnLeftParentheses.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnClearAll
            // 
            this.btnClearAll.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnClearAll.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnClearAll.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnClearAll.FlatAppearance.BorderSize = 0;
            this.btnClearAll.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnClearAll.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnClearAll.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnClearAll.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnClearAll.Location = new System.Drawing.Point(140, 2);
            this.btnClearAll.Margin = new System.Windows.Forms.Padding(2);
            this.btnClearAll.Name = "btnClearAll";
            this.btnClearAll.Size = new System.Drawing.Size(65, 46);
            this.btnClearAll.TabIndex = 12;
            this.btnClearAll.Text = "C";
            this.btnClearAll.UseVisualStyleBackColor = false;
            this.btnClearAll.Click += new System.EventHandler(this.ClearAll);
            this.btnClearAll.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnClearAll.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnOne
            // 
            this.btnOne.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnOne.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnOne.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnOne.FlatAppearance.BorderSize = 0;
            this.btnOne.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnOne.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnOne.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnOne.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnOne.Location = new System.Drawing.Point(71, 152);
            this.btnOne.Margin = new System.Windows.Forms.Padding(2);
            this.btnOne.Name = "btnOne";
            this.btnOne.Size = new System.Drawing.Size(65, 46);
            this.btnOne.TabIndex = 26;
            this.btnOne.Text = "1";
            this.btnOne.UseVisualStyleBackColor = false;
            this.btnOne.Click += new System.EventHandler(this.btnOne_Click);
            this.btnOne.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnOne.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnFour
            // 
            this.btnFour.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnFour.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnFour.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnFour.FlatAppearance.BorderSize = 0;
            this.btnFour.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnFour.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnFour.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnFour.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnFour.Location = new System.Drawing.Point(71, 102);
            this.btnFour.Margin = new System.Windows.Forms.Padding(2);
            this.btnFour.Name = "btnFour";
            this.btnFour.Size = new System.Drawing.Size(65, 46);
            this.btnFour.TabIndex = 21;
            this.btnFour.Text = "4";
            this.btnFour.UseVisualStyleBackColor = false;
            this.btnFour.Click += new System.EventHandler(this.btnFour_Click);
            this.btnFour.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnFour.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnSeven
            // 
            this.btnSeven.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnSeven.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(7)))), ((int)(((byte)(7)))));
            this.btnSeven.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnSeven.FlatAppearance.BorderSize = 0;
            this.btnSeven.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnSeven.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnSeven.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnSeven.Font = new System.Drawing.Font("Segoe UI Semibold", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSeven.Location = new System.Drawing.Point(71, 52);
            this.btnSeven.Margin = new System.Windows.Forms.Padding(2);
            this.btnSeven.Name = "btnSeven";
            this.btnSeven.Size = new System.Drawing.Size(65, 46);
            this.btnSeven.TabIndex = 16;
            this.btnSeven.Text = "7";
            this.btnSeven.UseVisualStyleBackColor = false;
            this.btnSeven.Click += new System.EventHandler(this.btnSeven_Click);
            this.btnSeven.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnSeven.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.extensionKeyPanel);
            this.panel1.Controls.Add(this.advancedKeyPanel);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Margin = new System.Windows.Forms.Padding(0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(345, 99);
            this.panel1.TabIndex = 1;
            // 
            // extensionKeyPanel
            // 
            this.extensionKeyPanel.Controls.Add(this.extensionKeyLayout);
            this.extensionKeyPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.extensionKeyPanel.Location = new System.Drawing.Point(0, 0);
            this.extensionKeyPanel.Margin = new System.Windows.Forms.Padding(0);
            this.extensionKeyPanel.Name = "extensionKeyPanel";
            this.extensionKeyPanel.Size = new System.Drawing.Size(345, 99);
            this.extensionKeyPanel.TabIndex = 3;
            // 
            // extensionKeyLayout
            // 
            this.extensionKeyLayout.ColumnCount = 5;
            this.extensionKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.extensionKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.extensionKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.extensionKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.extensionKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.extensionKeyLayout.Controls.Add(this.btnReciprocal, 0, 1);
            this.extensionKeyLayout.Controls.Add(this.btnLn, 0, 1);
            this.extensionKeyLayout.Controls.Add(this.btnExponential, 0, 1);
            this.extensionKeyLayout.Controls.Add(this.btnDegrees, 0, 1);
            this.extensionKeyLayout.Controls.Add(this.btnDms, 0, 1);
            this.extensionKeyLayout.Controls.Add(this.btnCosineMinusOne, 3, 0);
            this.extensionKeyLayout.Controls.Add(this.btnTangentMinusOne, 4, 0);
            this.extensionKeyLayout.Controls.Add(this.btnSineMinusOne, 2, 0);
            this.extensionKeyLayout.Controls.Add(this.btnYthRoot, 1, 0);
            this.extensionKeyLayout.Controls.Add(this.btnXCube, 0, 0);
            this.extensionKeyLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.extensionKeyLayout.Location = new System.Drawing.Point(0, 0);
            this.extensionKeyLayout.Name = "extensionKeyLayout";
            this.extensionKeyLayout.RowCount = 2;
            this.extensionKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.extensionKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.extensionKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.extensionKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.extensionKeyLayout.Size = new System.Drawing.Size(345, 99);
            this.extensionKeyLayout.TabIndex = 0;
            // 
            // btnReciprocal
            // 
            this.btnReciprocal.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnReciprocal.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnReciprocal.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnReciprocal.FlatAppearance.BorderSize = 0;
            this.btnReciprocal.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnReciprocal.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnReciprocal.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnReciprocal.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnReciprocal.Location = new System.Drawing.Point(2, 51);
            this.btnReciprocal.Margin = new System.Windows.Forms.Padding(2);
            this.btnReciprocal.Name = "btnReciprocal";
            this.btnReciprocal.Size = new System.Drawing.Size(65, 46);
            this.btnReciprocal.TabIndex = 10;
            this.btnReciprocal.Text = "¹⁄ x";
            this.btnReciprocal.UseVisualStyleBackColor = false;
            this.btnReciprocal.Click += new System.EventHandler(this.btnReciprocal_Click);
            this.btnReciprocal.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnReciprocal.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnLn
            // 
            this.btnLn.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnLn.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnLn.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnLn.FlatAppearance.BorderSize = 0;
            this.btnLn.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnLn.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnLn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnLn.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnLn.Location = new System.Drawing.Point(140, 51);
            this.btnLn.Margin = new System.Windows.Forms.Padding(2);
            this.btnLn.Name = "btnLn";
            this.btnLn.Size = new System.Drawing.Size(65, 46);
            this.btnLn.TabIndex = 9;
            this.btnLn.Text = "ln";
            this.btnLn.UseVisualStyleBackColor = false;
            this.btnLn.Click += new System.EventHandler(this.btnLn_Click);
            this.btnLn.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnLn.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnExponential
            // 
            this.btnExponential.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnExponential.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnExponential.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnExponential.FlatAppearance.BorderSize = 0;
            this.btnExponential.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnExponential.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnExponential.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnExponential.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnExponential.Location = new System.Drawing.Point(71, 51);
            this.btnExponential.Margin = new System.Windows.Forms.Padding(2);
            this.btnExponential.Name = "btnExponential";
            this.btnExponential.Size = new System.Drawing.Size(65, 46);
            this.btnExponential.TabIndex = 8;
            this.btnExponential.Text = "eˣ";
            this.btnExponential.UseVisualStyleBackColor = false;
            this.btnExponential.Click += new System.EventHandler(this.btnExponential_Click);
            this.btnExponential.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnExponential.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnDegrees
            // 
            this.btnDegrees.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnDegrees.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnDegrees.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnDegrees.FlatAppearance.BorderSize = 0;
            this.btnDegrees.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnDegrees.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnDegrees.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnDegrees.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDegrees.Location = new System.Drawing.Point(278, 51);
            this.btnDegrees.Margin = new System.Windows.Forms.Padding(2);
            this.btnDegrees.Name = "btnDegrees";
            this.btnDegrees.Size = new System.Drawing.Size(65, 46);
            this.btnDegrees.TabIndex = 7;
            this.btnDegrees.Text = "deg";
            this.btnDegrees.UseVisualStyleBackColor = false;
            this.btnDegrees.Click += new System.EventHandler(this.btnDegrees_Click);
            this.btnDegrees.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnDegrees.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnDms
            // 
            this.btnDms.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnDms.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnDms.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnDms.FlatAppearance.BorderSize = 0;
            this.btnDms.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnDms.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnDms.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnDms.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDms.Location = new System.Drawing.Point(209, 51);
            this.btnDms.Margin = new System.Windows.Forms.Padding(2);
            this.btnDms.Name = "btnDms";
            this.btnDms.Size = new System.Drawing.Size(65, 46);
            this.btnDms.TabIndex = 5;
            this.btnDms.Text = "dms";
            this.btnDms.UseVisualStyleBackColor = false;
            this.btnDms.Click += new System.EventHandler(this.btnDms_Click);
            this.btnDms.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnDms.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnCosineMinusOne
            // 
            this.btnCosineMinusOne.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnCosineMinusOne.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnCosineMinusOne.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnCosineMinusOne.FlatAppearance.BorderSize = 0;
            this.btnCosineMinusOne.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnCosineMinusOne.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnCosineMinusOne.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnCosineMinusOne.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnCosineMinusOne.Location = new System.Drawing.Point(209, 2);
            this.btnCosineMinusOne.Margin = new System.Windows.Forms.Padding(2);
            this.btnCosineMinusOne.Name = "btnCosineMinusOne";
            this.btnCosineMinusOne.Size = new System.Drawing.Size(65, 45);
            this.btnCosineMinusOne.TabIndex = 1;
            this.btnCosineMinusOne.Text = "cos⁻¹";
            this.btnCosineMinusOne.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.btnCosineMinusOne.UseVisualStyleBackColor = false;
            this.btnCosineMinusOne.Click += new System.EventHandler(this.btnCosineMinusOne_Click);
            this.btnCosineMinusOne.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnCosineMinusOne.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnTangentMinusOne
            // 
            this.btnTangentMinusOne.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnTangentMinusOne.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnTangentMinusOne.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnTangentMinusOne.FlatAppearance.BorderSize = 0;
            this.btnTangentMinusOne.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnTangentMinusOne.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnTangentMinusOne.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnTangentMinusOne.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnTangentMinusOne.Location = new System.Drawing.Point(278, 2);
            this.btnTangentMinusOne.Margin = new System.Windows.Forms.Padding(2);
            this.btnTangentMinusOne.Name = "btnTangentMinusOne";
            this.btnTangentMinusOne.Size = new System.Drawing.Size(65, 45);
            this.btnTangentMinusOne.TabIndex = 4;
            this.btnTangentMinusOne.Text = "tan⁻¹";
            this.btnTangentMinusOne.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.btnTangentMinusOne.UseVisualStyleBackColor = false;
            this.btnTangentMinusOne.Click += new System.EventHandler(this.btnTangentMinusOne_Click);
            this.btnTangentMinusOne.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnTangentMinusOne.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnSineMinusOne
            // 
            this.btnSineMinusOne.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnSineMinusOne.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnSineMinusOne.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnSineMinusOne.FlatAppearance.BorderSize = 0;
            this.btnSineMinusOne.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnSineMinusOne.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnSineMinusOne.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnSineMinusOne.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSineMinusOne.Location = new System.Drawing.Point(140, 2);
            this.btnSineMinusOne.Margin = new System.Windows.Forms.Padding(2);
            this.btnSineMinusOne.Name = "btnSineMinusOne";
            this.btnSineMinusOne.Size = new System.Drawing.Size(65, 45);
            this.btnSineMinusOne.TabIndex = 3;
            this.btnSineMinusOne.Text = "sin⁻¹";
            this.btnSineMinusOne.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.btnSineMinusOne.UseVisualStyleBackColor = false;
            this.btnSineMinusOne.Click += new System.EventHandler(this.btnSineMinusOne_Click);
            this.btnSineMinusOne.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnSineMinusOne.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnYthRoot
            // 
            this.btnYthRoot.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnYthRoot.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnYthRoot.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnYthRoot.FlatAppearance.BorderSize = 0;
            this.btnYthRoot.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnYthRoot.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnYthRoot.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnYthRoot.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnYthRoot.Location = new System.Drawing.Point(71, 2);
            this.btnYthRoot.Margin = new System.Windows.Forms.Padding(2);
            this.btnYthRoot.Name = "btnYthRoot";
            this.btnYthRoot.Size = new System.Drawing.Size(65, 45);
            this.btnYthRoot.TabIndex = 2;
            this.btnYthRoot.Text = "ʸ√x";
            this.btnYthRoot.UseVisualStyleBackColor = false;
            this.btnYthRoot.Click += new System.EventHandler(this.btnYthRoot_Click);
            this.btnYthRoot.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnYthRoot.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnXCube
            // 
            this.btnXCube.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnXCube.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnXCube.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnXCube.FlatAppearance.BorderSize = 0;
            this.btnXCube.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnXCube.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnXCube.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnXCube.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnXCube.Location = new System.Drawing.Point(2, 2);
            this.btnXCube.Margin = new System.Windows.Forms.Padding(2);
            this.btnXCube.Name = "btnXCube";
            this.btnXCube.Size = new System.Drawing.Size(65, 45);
            this.btnXCube.TabIndex = 6;
            this.btnXCube.Text = "x³";
            this.btnXCube.UseVisualStyleBackColor = false;
            this.btnXCube.Click += new System.EventHandler(this.btnXCube_Click);
            this.btnXCube.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnXCube.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // advancedKeyPanel
            // 
            this.advancedKeyPanel.Controls.Add(this.advancedKeyLayout);
            this.advancedKeyPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.advancedKeyPanel.Location = new System.Drawing.Point(0, 0);
            this.advancedKeyPanel.Margin = new System.Windows.Forms.Padding(0);
            this.advancedKeyPanel.Name = "advancedKeyPanel";
            this.advancedKeyPanel.Size = new System.Drawing.Size(345, 99);
            this.advancedKeyPanel.TabIndex = 1;
            // 
            // advancedKeyLayout
            // 
            this.advancedKeyLayout.ColumnCount = 5;
            this.advancedKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.advancedKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.advancedKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.advancedKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.advancedKeyLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.advancedKeyLayout.Controls.Add(this.btnTangent, 4, 0);
            this.advancedKeyLayout.Controls.Add(this.btnModulos, 4, 1);
            this.advancedKeyLayout.Controls.Add(this.btnXSquare, 0, 0);
            this.advancedKeyLayout.Controls.Add(this.btnExp, 3, 1);
            this.advancedKeyLayout.Controls.Add(this.btnXPowerY, 1, 0);
            this.advancedKeyLayout.Controls.Add(this.btnLog, 2, 1);
            this.advancedKeyLayout.Controls.Add(this.btnCosine, 3, 0);
            this.advancedKeyLayout.Controls.Add(this.btnSquareRoot, 0, 1);
            this.advancedKeyLayout.Controls.Add(this.btnSine, 2, 0);
            this.advancedKeyLayout.Controls.Add(this.btnTenPowerX, 1, 1);
            this.advancedKeyLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.advancedKeyLayout.Location = new System.Drawing.Point(0, 0);
            this.advancedKeyLayout.Margin = new System.Windows.Forms.Padding(3, 3, 3, 0);
            this.advancedKeyLayout.Name = "advancedKeyLayout";
            this.advancedKeyLayout.RowCount = 2;
            this.advancedKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.advancedKeyLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.advancedKeyLayout.Size = new System.Drawing.Size(345, 99);
            this.advancedKeyLayout.TabIndex = 0;
            // 
            // btnTangent
            // 
            this.btnTangent.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnTangent.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnTangent.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnTangent.FlatAppearance.BorderSize = 0;
            this.btnTangent.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnTangent.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnTangent.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnTangent.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnTangent.Location = new System.Drawing.Point(278, 2);
            this.btnTangent.Margin = new System.Windows.Forms.Padding(2);
            this.btnTangent.Name = "btnTangent";
            this.btnTangent.Size = new System.Drawing.Size(65, 45);
            this.btnTangent.TabIndex = 4;
            this.btnTangent.Text = "tan";
            this.btnTangent.UseVisualStyleBackColor = false;
            this.btnTangent.Click += new System.EventHandler(this.btnTangent_Click);
            this.btnTangent.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnTangent.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnModulos
            // 
            this.btnModulos.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnModulos.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnModulos.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnModulos.FlatAppearance.BorderSize = 0;
            this.btnModulos.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnModulos.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnModulos.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnModulos.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnModulos.Location = new System.Drawing.Point(278, 51);
            this.btnModulos.Margin = new System.Windows.Forms.Padding(2);
            this.btnModulos.Name = "btnModulos";
            this.btnModulos.Size = new System.Drawing.Size(65, 46);
            this.btnModulos.TabIndex = 9;
            this.btnModulos.Text = "Mod";
            this.btnModulos.UseVisualStyleBackColor = false;
            this.btnModulos.Click += new System.EventHandler(this.btnModulos_Click);
            this.btnModulos.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnModulos.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnXSquare
            // 
            this.btnXSquare.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnXSquare.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnXSquare.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnXSquare.FlatAppearance.BorderSize = 0;
            this.btnXSquare.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnXSquare.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnXSquare.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnXSquare.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnXSquare.Location = new System.Drawing.Point(2, 2);
            this.btnXSquare.Margin = new System.Windows.Forms.Padding(2);
            this.btnXSquare.Name = "btnXSquare";
            this.btnXSquare.Size = new System.Drawing.Size(65, 45);
            this.btnXSquare.TabIndex = 0;
            this.btnXSquare.Text = "x²";
            this.btnXSquare.UseVisualStyleBackColor = false;
            this.btnXSquare.Click += new System.EventHandler(this.btnXSquare_Click);
            this.btnXSquare.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnXSquare.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnExp
            // 
            this.btnExp.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnExp.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnExp.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnExp.FlatAppearance.BorderSize = 0;
            this.btnExp.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnExp.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnExp.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnExp.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnExp.Location = new System.Drawing.Point(209, 51);
            this.btnExp.Margin = new System.Windows.Forms.Padding(2);
            this.btnExp.Name = "btnExp";
            this.btnExp.Size = new System.Drawing.Size(65, 46);
            this.btnExp.TabIndex = 8;
            this.btnExp.Text = "Exp";
            this.btnExp.UseVisualStyleBackColor = false;
            this.btnExp.Click += new System.EventHandler(this.btnExp_Click);
            this.btnExp.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnExp.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnXPowerY
            // 
            this.btnXPowerY.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnXPowerY.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnXPowerY.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnXPowerY.FlatAppearance.BorderSize = 0;
            this.btnXPowerY.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnXPowerY.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnXPowerY.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnXPowerY.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnXPowerY.Location = new System.Drawing.Point(71, 2);
            this.btnXPowerY.Margin = new System.Windows.Forms.Padding(2);
            this.btnXPowerY.Name = "btnXPowerY";
            this.btnXPowerY.Size = new System.Drawing.Size(65, 45);
            this.btnXPowerY.TabIndex = 1;
            this.btnXPowerY.Text = "xʸ";
            this.btnXPowerY.UseVisualStyleBackColor = false;
            this.btnXPowerY.Click += new System.EventHandler(this.btnXPowerY_Click);
            this.btnXPowerY.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnXPowerY.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnLog
            // 
            this.btnLog.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnLog.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnLog.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnLog.FlatAppearance.BorderSize = 0;
            this.btnLog.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnLog.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnLog.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnLog.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnLog.Location = new System.Drawing.Point(140, 51);
            this.btnLog.Margin = new System.Windows.Forms.Padding(2);
            this.btnLog.Name = "btnLog";
            this.btnLog.Size = new System.Drawing.Size(65, 46);
            this.btnLog.TabIndex = 7;
            this.btnLog.Text = "log";
            this.btnLog.UseVisualStyleBackColor = false;
            this.btnLog.Click += new System.EventHandler(this.btnLog_Click);
            this.btnLog.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnLog.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnCosine
            // 
            this.btnCosine.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnCosine.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnCosine.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnCosine.FlatAppearance.BorderSize = 0;
            this.btnCosine.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnCosine.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnCosine.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnCosine.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnCosine.Location = new System.Drawing.Point(209, 2);
            this.btnCosine.Margin = new System.Windows.Forms.Padding(2);
            this.btnCosine.Name = "btnCosine";
            this.btnCosine.Size = new System.Drawing.Size(65, 45);
            this.btnCosine.TabIndex = 3;
            this.btnCosine.Text = "cos";
            this.btnCosine.UseVisualStyleBackColor = false;
            this.btnCosine.Click += new System.EventHandler(this.btnCosine_Click);
            this.btnCosine.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnCosine.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnSquareRoot
            // 
            this.btnSquareRoot.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnSquareRoot.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnSquareRoot.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnSquareRoot.FlatAppearance.BorderSize = 0;
            this.btnSquareRoot.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnSquareRoot.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnSquareRoot.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnSquareRoot.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSquareRoot.Location = new System.Drawing.Point(2, 51);
            this.btnSquareRoot.Margin = new System.Windows.Forms.Padding(2);
            this.btnSquareRoot.Name = "btnSquareRoot";
            this.btnSquareRoot.Size = new System.Drawing.Size(65, 46);
            this.btnSquareRoot.TabIndex = 5;
            this.btnSquareRoot.Text = "√";
            this.btnSquareRoot.UseVisualStyleBackColor = false;
            this.btnSquareRoot.Click += new System.EventHandler(this.btnSquareRoot_Click);
            this.btnSquareRoot.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnSquareRoot.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnSine
            // 
            this.btnSine.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnSine.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnSine.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnSine.FlatAppearance.BorderSize = 0;
            this.btnSine.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnSine.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnSine.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnSine.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSine.Location = new System.Drawing.Point(140, 2);
            this.btnSine.Margin = new System.Windows.Forms.Padding(2);
            this.btnSine.Name = "btnSine";
            this.btnSine.Size = new System.Drawing.Size(65, 45);
            this.btnSine.TabIndex = 2;
            this.btnSine.Text = "sin";
            this.btnSine.UseVisualStyleBackColor = false;
            this.btnSine.Click += new System.EventHandler(this.btnSine_Click);
            this.btnSine.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnSine.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // btnTenPowerX
            // 
            this.btnTenPowerX.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btnTenPowerX.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.btnTenPowerX.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnTenPowerX.FlatAppearance.BorderSize = 0;
            this.btnTenPowerX.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.btnTenPowerX.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.btnTenPowerX.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnTenPowerX.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnTenPowerX.Location = new System.Drawing.Point(71, 51);
            this.btnTenPowerX.Margin = new System.Windows.Forms.Padding(2);
            this.btnTenPowerX.Name = "btnTenPowerX";
            this.btnTenPowerX.Size = new System.Drawing.Size(65, 46);
            this.btnTenPowerX.TabIndex = 6;
            this.btnTenPowerX.Text = "10ˣ";
            this.btnTenPowerX.UseVisualStyleBackColor = false;
            this.btnTenPowerX.Click += new System.EventHandler(this.btnTenPowerX_Click);
            this.btnTenPowerX.MouseEnter += new System.EventHandler(this.ButtonMouseEnter);
            this.btnTenPowerX.MouseLeave += new System.EventHandler(this.ButtonMouseLeave);
            // 
            // Calculator
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 17F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(75)))), ((int)(((byte)(75)))), ((int)(((byte)(75)))));
            this.ClientSize = new System.Drawing.Size(353, 630);
            this.Controls.Add(this.mainPanel);
            this.Font = new System.Drawing.Font("Segoe UI Semibold", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Margin = new System.Windows.Forms.Padding(4);
            this.MinimumSize = new System.Drawing.Size(270, 510);
            this.Name = "Calculator";
            this.Opacity = 0.99D;
            this.Padding = new System.Windows.Forms.Padding(1);
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Calculator";
            this.mainPanel.ResumeLayout(false);
            this.mainLayout.ResumeLayout(false);
            this.displayLayout.ResumeLayout(false);
            this.displayLayout.PerformLayout();
            this.topPanel.ResumeLayout(false);
            this.dragPanel.ResumeLayout(false);
            this.dragPanel.PerformLayout();
            this.controlPanel.ResumeLayout(false);
            this.buttonLayout.ResumeLayout(false);
            this.basicKeyPanel.ResumeLayout(false);
            this.basicKeyLayout.ResumeLayout(false);
            this.panel1.ResumeLayout(false);
            this.extensionKeyPanel.ResumeLayout(false);
            this.extensionKeyLayout.ResumeLayout(false);
            this.advancedKeyPanel.ResumeLayout(false);
            this.advancedKeyLayout.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel mainPanel;
        private System.Windows.Forms.TableLayoutPanel mainLayout;
        private System.Windows.Forms.Button btnEqual;
        private System.Windows.Forms.Button btnDot;
        private System.Windows.Forms.Button btnZero;
        private System.Windows.Forms.Button btnRightParentheses;
        private System.Windows.Forms.Button btnLeftParentheses;
        private System.Windows.Forms.Button btnPlus;
        private System.Windows.Forms.Button btnThree;
        private System.Windows.Forms.Button btnTwo;
        private System.Windows.Forms.Button btnOne;
        private System.Windows.Forms.Button btnNegate;
        private System.Windows.Forms.Button btnMinus;
        private System.Windows.Forms.Button btnSix;
        private System.Windows.Forms.Button btnFive;
        private System.Windows.Forms.Button btnFour;
        private System.Windows.Forms.Button btnFactorial;
        private System.Windows.Forms.Button btnMultiply;
        private System.Windows.Forms.Button btnNine;
        private System.Windows.Forms.Button btnEight;
        private System.Windows.Forms.Button btnSeven;
        private System.Windows.Forms.Button btnPI;
        private System.Windows.Forms.Button btnDivide;
        private System.Windows.Forms.Button btnDelete;
        private System.Windows.Forms.Button btnClearAll;
        private System.Windows.Forms.Button btnClearLast;
        private System.Windows.Forms.Button btnExtend;
        private System.Windows.Forms.Button btnModulos;
        private System.Windows.Forms.Button btnExp;
        private System.Windows.Forms.Button btnLog;
        private System.Windows.Forms.Button btnTenPowerX;
        private System.Windows.Forms.Button btnSquareRoot;
        private System.Windows.Forms.Button btnTangent;
        private System.Windows.Forms.Button btnCosine;
        private System.Windows.Forms.Button btnSine;
        private System.Windows.Forms.Button btnXPowerY;
        private System.Windows.Forms.Button btnXSquare;
        private System.Windows.Forms.TableLayoutPanel displayLayout;
        private System.Windows.Forms.TableLayoutPanel topPanel;
        private System.Windows.Forms.Panel dragPanel;
        private System.Windows.Forms.Label title;
        private System.Windows.Forms.TableLayoutPanel controlPanel;
        private System.Windows.Forms.Button btnMinimize;
        private System.Windows.Forms.Button btnMaxNormal;
        private System.Windows.Forms.Button btnExit;
        private System.Windows.Forms.Label numberDisplay;
        private System.Windows.Forms.Label equationDisplay;
        private System.Windows.Forms.TableLayoutPanel buttonLayout;
        private System.Windows.Forms.Panel basicKeyPanel;
        private System.Windows.Forms.TableLayoutPanel basicKeyLayout;
        private System.Windows.Forms.Panel advancedKeyPanel;
        private System.Windows.Forms.TableLayoutPanel advancedKeyLayout;
        private System.Windows.Forms.Panel extensionKeyPanel;
        private System.Windows.Forms.TableLayoutPanel extensionKeyLayout;
        private System.Windows.Forms.Button btnReciprocal;
        private System.Windows.Forms.Button btnLn;
        private System.Windows.Forms.Button btnExponential;
        private System.Windows.Forms.Button btnDegrees;
        private System.Windows.Forms.Button btnDms;
        private System.Windows.Forms.Button btnCosineMinusOne;
        private System.Windows.Forms.Button btnTangentMinusOne;
        private System.Windows.Forms.Button btnSineMinusOne;
        private System.Windows.Forms.Button btnYthRoot;
        private System.Windows.Forms.Button btnXCube;
        private System.Windows.Forms.Panel panel1;




    }
}

