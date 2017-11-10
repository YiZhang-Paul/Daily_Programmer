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
            this.mainLayout = new System.Windows.Forms.TableLayoutPanel();
            this.buttonLayout = new System.Windows.Forms.TableLayoutPanel();
            this.displayLayout = new System.Windows.Forms.TableLayoutPanel();
            this.btnXSquare = new System.Windows.Forms.Button();
            this.btnXPowerY = new System.Windows.Forms.Button();
            this.btnSine = new System.Windows.Forms.Button();
            this.btnCosine = new System.Windows.Forms.Button();
            this.btnTangent = new System.Windows.Forms.Button();
            this.btnSquareRoot = new System.Windows.Forms.Button();
            this.btnTenPowerX = new System.Windows.Forms.Button();
            this.btnLog = new System.Windows.Forms.Button();
            this.btnExponential = new System.Windows.Forms.Button();
            this.btnModulos = new System.Windows.Forms.Button();
            this.button11 = new System.Windows.Forms.Button();
            this.btnClearLast = new System.Windows.Forms.Button();
            this.btnClearAll = new System.Windows.Forms.Button();
            this.btnDelete = new System.Windows.Forms.Button();
            this.btnDivide = new System.Windows.Forms.Button();
            this.btnPI = new System.Windows.Forms.Button();
            this.btnSeven = new System.Windows.Forms.Button();
            this.btnEight = new System.Windows.Forms.Button();
            this.btnNine = new System.Windows.Forms.Button();
            this.btnMultiply = new System.Windows.Forms.Button();
            this.btnFactorial = new System.Windows.Forms.Button();
            this.btnFour = new System.Windows.Forms.Button();
            this.btnFive = new System.Windows.Forms.Button();
            this.btnSix = new System.Windows.Forms.Button();
            this.btnMinus = new System.Windows.Forms.Button();
            this.btnNegate = new System.Windows.Forms.Button();
            this.btnOne = new System.Windows.Forms.Button();
            this.btnTwo = new System.Windows.Forms.Button();
            this.btnThree = new System.Windows.Forms.Button();
            this.btnPlus = new System.Windows.Forms.Button();
            this.btnLeftParentheses = new System.Windows.Forms.Button();
            this.btnRightParentheses = new System.Windows.Forms.Button();
            this.btnZero = new System.Windows.Forms.Button();
            this.btnDot = new System.Windows.Forms.Button();
            this.btnEqual = new System.Windows.Forms.Button();
            this.numberDisplay = new System.Windows.Forms.Label();
            this.topPanel = new System.Windows.Forms.TableLayoutPanel();
            this.dragPanel = new System.Windows.Forms.Panel();
            this.controlPanel = new System.Windows.Forms.TableLayoutPanel();
            this.btnMinimize = new System.Windows.Forms.Button();
            this.btnMaxNormal = new System.Windows.Forms.Button();
            this.btnExit = new System.Windows.Forms.Button();
            this.title = new System.Windows.Forms.Label();
            this.mainLayout.SuspendLayout();
            this.buttonLayout.SuspendLayout();
            this.displayLayout.SuspendLayout();
            this.topPanel.SuspendLayout();
            this.dragPanel.SuspendLayout();
            this.controlPanel.SuspendLayout();
            this.SuspendLayout();
            // 
            // mainLayout
            // 
            this.mainLayout.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.mainLayout.ColumnCount = 1;
            this.mainLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.mainLayout.Controls.Add(this.buttonLayout, 0, 1);
            this.mainLayout.Controls.Add(this.displayLayout, 0, 0);
            this.mainLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.mainLayout.Location = new System.Drawing.Point(0, 0);
            this.mainLayout.Margin = new System.Windows.Forms.Padding(0);
            this.mainLayout.Name = "mainLayout";
            this.mainLayout.RowCount = 2;
            this.mainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 43.33333F));
            this.mainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 56.66667F));
            this.mainLayout.Size = new System.Drawing.Size(365, 630);
            this.mainLayout.TabIndex = 0;
            // 
            // buttonLayout
            // 
            this.buttonLayout.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.buttonLayout.ColumnCount = 5;
            this.buttonLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.buttonLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.buttonLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.buttonLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.buttonLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.buttonLayout.Controls.Add(this.btnEqual, 4, 6);
            this.buttonLayout.Controls.Add(this.btnDot, 3, 6);
            this.buttonLayout.Controls.Add(this.btnZero, 2, 6);
            this.buttonLayout.Controls.Add(this.btnRightParentheses, 1, 6);
            this.buttonLayout.Controls.Add(this.btnLeftParentheses, 0, 6);
            this.buttonLayout.Controls.Add(this.btnPlus, 4, 5);
            this.buttonLayout.Controls.Add(this.btnThree, 3, 5);
            this.buttonLayout.Controls.Add(this.btnTwo, 2, 5);
            this.buttonLayout.Controls.Add(this.btnOne, 1, 5);
            this.buttonLayout.Controls.Add(this.btnNegate, 0, 5);
            this.buttonLayout.Controls.Add(this.btnMinus, 4, 4);
            this.buttonLayout.Controls.Add(this.btnSix, 3, 4);
            this.buttonLayout.Controls.Add(this.btnFive, 2, 4);
            this.buttonLayout.Controls.Add(this.btnFour, 1, 4);
            this.buttonLayout.Controls.Add(this.btnFactorial, 0, 4);
            this.buttonLayout.Controls.Add(this.btnMultiply, 4, 3);
            this.buttonLayout.Controls.Add(this.btnNine, 3, 3);
            this.buttonLayout.Controls.Add(this.btnEight, 2, 3);
            this.buttonLayout.Controls.Add(this.btnSeven, 1, 3);
            this.buttonLayout.Controls.Add(this.btnPI, 0, 3);
            this.buttonLayout.Controls.Add(this.btnDivide, 4, 2);
            this.buttonLayout.Controls.Add(this.btnDelete, 3, 2);
            this.buttonLayout.Controls.Add(this.btnClearAll, 2, 2);
            this.buttonLayout.Controls.Add(this.btnClearLast, 1, 2);
            this.buttonLayout.Controls.Add(this.button11, 0, 2);
            this.buttonLayout.Controls.Add(this.btnModulos, 4, 1);
            this.buttonLayout.Controls.Add(this.btnExponential, 3, 1);
            this.buttonLayout.Controls.Add(this.btnLog, 2, 1);
            this.buttonLayout.Controls.Add(this.btnTenPowerX, 1, 1);
            this.buttonLayout.Controls.Add(this.btnSquareRoot, 0, 1);
            this.buttonLayout.Controls.Add(this.btnTangent, 4, 0);
            this.buttonLayout.Controls.Add(this.btnCosine, 3, 0);
            this.buttonLayout.Controls.Add(this.btnSine, 2, 0);
            this.buttonLayout.Controls.Add(this.btnXPowerY, 1, 0);
            this.buttonLayout.Controls.Add(this.btnXSquare, 0, 0);
            this.buttonLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.buttonLayout.Location = new System.Drawing.Point(3, 275);
            this.buttonLayout.Name = "buttonLayout";
            this.buttonLayout.RowCount = 7;
            this.buttonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 14.28571F));
            this.buttonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 14.28571F));
            this.buttonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 14.28571F));
            this.buttonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 14.28571F));
            this.buttonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 14.28571F));
            this.buttonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 14.28571F));
            this.buttonLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 14.28571F));
            this.buttonLayout.Size = new System.Drawing.Size(359, 352);
            this.buttonLayout.TabIndex = 0;
            // 
            // displayLayout
            // 
            this.displayLayout.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.displayLayout.ColumnCount = 1;
            this.displayLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.displayLayout.Controls.Add(this.numberDisplay, 0, 2);
            this.displayLayout.Controls.Add(this.topPanel, 0, 0);
            this.displayLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.displayLayout.Location = new System.Drawing.Point(0, 0);
            this.displayLayout.Margin = new System.Windows.Forms.Padding(0);
            this.displayLayout.Name = "displayLayout";
            this.displayLayout.RowCount = 5;
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 11.46953F));
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 21.8638F));
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 33.33333F));
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 17.58242F));
            this.displayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 15.01832F));
            this.displayLayout.Size = new System.Drawing.Size(365, 272);
            this.displayLayout.TabIndex = 1;
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
            this.btnXSquare.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnXSquare.Location = new System.Drawing.Point(2, 2);
            this.btnXSquare.Margin = new System.Windows.Forms.Padding(2);
            this.btnXSquare.Name = "btnXSquare";
            this.btnXSquare.Size = new System.Drawing.Size(67, 46);
            this.btnXSquare.TabIndex = 0;
            this.btnXSquare.Text = "x²";
            this.btnXSquare.UseVisualStyleBackColor = false;
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
            this.btnXPowerY.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnXPowerY.Location = new System.Drawing.Point(73, 2);
            this.btnXPowerY.Margin = new System.Windows.Forms.Padding(2);
            this.btnXPowerY.Name = "btnXPowerY";
            this.btnXPowerY.Size = new System.Drawing.Size(67, 46);
            this.btnXPowerY.TabIndex = 1;
            this.btnXPowerY.Text = "xʸ";
            this.btnXPowerY.UseVisualStyleBackColor = false;
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
            this.btnSine.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSine.Location = new System.Drawing.Point(144, 2);
            this.btnSine.Margin = new System.Windows.Forms.Padding(2);
            this.btnSine.Name = "btnSine";
            this.btnSine.Size = new System.Drawing.Size(67, 46);
            this.btnSine.TabIndex = 2;
            this.btnSine.Text = "sin";
            this.btnSine.UseVisualStyleBackColor = false;
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
            this.btnCosine.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnCosine.Location = new System.Drawing.Point(215, 2);
            this.btnCosine.Margin = new System.Windows.Forms.Padding(2);
            this.btnCosine.Name = "btnCosine";
            this.btnCosine.Size = new System.Drawing.Size(67, 46);
            this.btnCosine.TabIndex = 3;
            this.btnCosine.Text = "cos";
            this.btnCosine.UseVisualStyleBackColor = false;
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
            this.btnTangent.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnTangent.Location = new System.Drawing.Point(286, 2);
            this.btnTangent.Margin = new System.Windows.Forms.Padding(2);
            this.btnTangent.Name = "btnTangent";
            this.btnTangent.Size = new System.Drawing.Size(71, 46);
            this.btnTangent.TabIndex = 4;
            this.btnTangent.Text = "tan";
            this.btnTangent.UseVisualStyleBackColor = false;
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
            this.btnSquareRoot.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSquareRoot.Location = new System.Drawing.Point(2, 52);
            this.btnSquareRoot.Margin = new System.Windows.Forms.Padding(2);
            this.btnSquareRoot.Name = "btnSquareRoot";
            this.btnSquareRoot.Size = new System.Drawing.Size(67, 46);
            this.btnSquareRoot.TabIndex = 5;
            this.btnSquareRoot.Text = "√";
            this.btnSquareRoot.UseVisualStyleBackColor = false;
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
            this.btnTenPowerX.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnTenPowerX.Location = new System.Drawing.Point(73, 52);
            this.btnTenPowerX.Margin = new System.Windows.Forms.Padding(2);
            this.btnTenPowerX.Name = "btnTenPowerX";
            this.btnTenPowerX.Size = new System.Drawing.Size(67, 46);
            this.btnTenPowerX.TabIndex = 6;
            this.btnTenPowerX.Text = "10ˣ";
            this.btnTenPowerX.UseVisualStyleBackColor = false;
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
            this.btnLog.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnLog.Location = new System.Drawing.Point(144, 52);
            this.btnLog.Margin = new System.Windows.Forms.Padding(2);
            this.btnLog.Name = "btnLog";
            this.btnLog.Size = new System.Drawing.Size(67, 46);
            this.btnLog.TabIndex = 7;
            this.btnLog.Text = "log";
            this.btnLog.UseVisualStyleBackColor = false;
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
            this.btnExponential.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnExponential.Location = new System.Drawing.Point(215, 52);
            this.btnExponential.Margin = new System.Windows.Forms.Padding(2);
            this.btnExponential.Name = "btnExponential";
            this.btnExponential.Size = new System.Drawing.Size(67, 46);
            this.btnExponential.TabIndex = 8;
            this.btnExponential.Text = "Exp";
            this.btnExponential.UseVisualStyleBackColor = false;
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
            this.btnModulos.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnModulos.Location = new System.Drawing.Point(286, 52);
            this.btnModulos.Margin = new System.Windows.Forms.Padding(2);
            this.btnModulos.Name = "btnModulos";
            this.btnModulos.Size = new System.Drawing.Size(71, 46);
            this.btnModulos.TabIndex = 9;
            this.btnModulos.Text = "Mod";
            this.btnModulos.UseVisualStyleBackColor = false;
            // 
            // button11
            // 
            this.button11.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.button11.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.button11.Dock = System.Windows.Forms.DockStyle.Fill;
            this.button11.FlatAppearance.BorderSize = 0;
            this.button11.FlatAppearance.MouseDownBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(67)))), ((int)(((byte)(67)))), ((int)(((byte)(67)))));
            this.button11.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(58)))), ((int)(((byte)(58)))), ((int)(((byte)(58)))));
            this.button11.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button11.Font = new System.Drawing.Font("Segoe UI", 12.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button11.Location = new System.Drawing.Point(2, 102);
            this.button11.Margin = new System.Windows.Forms.Padding(2);
            this.button11.Name = "button11";
            this.button11.Size = new System.Drawing.Size(67, 46);
            this.button11.TabIndex = 10;
            this.button11.Text = "N/A";
            this.button11.UseVisualStyleBackColor = false;
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
            this.btnClearLast.Location = new System.Drawing.Point(73, 102);
            this.btnClearLast.Margin = new System.Windows.Forms.Padding(2);
            this.btnClearLast.Name = "btnClearLast";
            this.btnClearLast.Size = new System.Drawing.Size(67, 46);
            this.btnClearLast.TabIndex = 11;
            this.btnClearLast.Text = "CE";
            this.btnClearLast.UseVisualStyleBackColor = false;
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
            this.btnClearAll.Location = new System.Drawing.Point(144, 102);
            this.btnClearAll.Margin = new System.Windows.Forms.Padding(2);
            this.btnClearAll.Name = "btnClearAll";
            this.btnClearAll.Size = new System.Drawing.Size(67, 46);
            this.btnClearAll.TabIndex = 12;
            this.btnClearAll.Text = "C";
            this.btnClearAll.UseVisualStyleBackColor = false;
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
            this.btnDelete.Location = new System.Drawing.Point(215, 102);
            this.btnDelete.Margin = new System.Windows.Forms.Padding(2);
            this.btnDelete.Name = "btnDelete";
            this.btnDelete.Size = new System.Drawing.Size(67, 46);
            this.btnDelete.TabIndex = 13;
            this.btnDelete.Text = "Del";
            this.btnDelete.UseVisualStyleBackColor = false;
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
            this.btnDivide.Font = new System.Drawing.Font("Segoe UI Light", 21F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDivide.Location = new System.Drawing.Point(286, 102);
            this.btnDivide.Margin = new System.Windows.Forms.Padding(2);
            this.btnDivide.Name = "btnDivide";
            this.btnDivide.Size = new System.Drawing.Size(71, 46);
            this.btnDivide.TabIndex = 14;
            this.btnDivide.Text = "÷";
            this.btnDivide.UseVisualStyleBackColor = false;
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
            this.btnPI.Location = new System.Drawing.Point(2, 152);
            this.btnPI.Margin = new System.Windows.Forms.Padding(2);
            this.btnPI.Name = "btnPI";
            this.btnPI.Size = new System.Drawing.Size(67, 46);
            this.btnPI.TabIndex = 15;
            this.btnPI.Text = "π";
            this.btnPI.UseVisualStyleBackColor = false;
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
            this.btnSeven.Location = new System.Drawing.Point(73, 152);
            this.btnSeven.Margin = new System.Windows.Forms.Padding(2);
            this.btnSeven.Name = "btnSeven";
            this.btnSeven.Size = new System.Drawing.Size(67, 46);
            this.btnSeven.TabIndex = 16;
            this.btnSeven.Text = "7";
            this.btnSeven.UseVisualStyleBackColor = false;
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
            this.btnEight.Location = new System.Drawing.Point(144, 152);
            this.btnEight.Margin = new System.Windows.Forms.Padding(2);
            this.btnEight.Name = "btnEight";
            this.btnEight.Size = new System.Drawing.Size(67, 46);
            this.btnEight.TabIndex = 17;
            this.btnEight.Text = "8";
            this.btnEight.UseVisualStyleBackColor = false;
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
            this.btnNine.Location = new System.Drawing.Point(215, 152);
            this.btnNine.Margin = new System.Windows.Forms.Padding(2);
            this.btnNine.Name = "btnNine";
            this.btnNine.Size = new System.Drawing.Size(67, 46);
            this.btnNine.TabIndex = 18;
            this.btnNine.Text = "9";
            this.btnNine.UseVisualStyleBackColor = false;
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
            this.btnMultiply.Font = new System.Drawing.Font("Segoe UI Light", 21F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnMultiply.Location = new System.Drawing.Point(286, 152);
            this.btnMultiply.Margin = new System.Windows.Forms.Padding(2);
            this.btnMultiply.Name = "btnMultiply";
            this.btnMultiply.Size = new System.Drawing.Size(71, 46);
            this.btnMultiply.TabIndex = 19;
            this.btnMultiply.Text = "×";
            this.btnMultiply.UseVisualStyleBackColor = false;
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
            this.btnFactorial.Location = new System.Drawing.Point(2, 202);
            this.btnFactorial.Margin = new System.Windows.Forms.Padding(2);
            this.btnFactorial.Name = "btnFactorial";
            this.btnFactorial.Size = new System.Drawing.Size(67, 46);
            this.btnFactorial.TabIndex = 20;
            this.btnFactorial.Text = "n!";
            this.btnFactorial.UseVisualStyleBackColor = false;
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
            this.btnFour.Location = new System.Drawing.Point(73, 202);
            this.btnFour.Margin = new System.Windows.Forms.Padding(2);
            this.btnFour.Name = "btnFour";
            this.btnFour.Size = new System.Drawing.Size(67, 46);
            this.btnFour.TabIndex = 21;
            this.btnFour.Text = "4";
            this.btnFour.UseVisualStyleBackColor = false;
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
            this.btnFive.Location = new System.Drawing.Point(144, 202);
            this.btnFive.Margin = new System.Windows.Forms.Padding(2);
            this.btnFive.Name = "btnFive";
            this.btnFive.Size = new System.Drawing.Size(67, 46);
            this.btnFive.TabIndex = 22;
            this.btnFive.Text = "5";
            this.btnFive.UseVisualStyleBackColor = false;
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
            this.btnSix.Location = new System.Drawing.Point(215, 202);
            this.btnSix.Margin = new System.Windows.Forms.Padding(2);
            this.btnSix.Name = "btnSix";
            this.btnSix.Size = new System.Drawing.Size(67, 46);
            this.btnSix.TabIndex = 23;
            this.btnSix.Text = "6";
            this.btnSix.UseVisualStyleBackColor = false;
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
            this.btnMinus.Font = new System.Drawing.Font("Segoe UI Light", 21F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnMinus.Location = new System.Drawing.Point(286, 202);
            this.btnMinus.Margin = new System.Windows.Forms.Padding(2);
            this.btnMinus.Name = "btnMinus";
            this.btnMinus.Size = new System.Drawing.Size(71, 46);
            this.btnMinus.TabIndex = 24;
            this.btnMinus.Text = "−";
            this.btnMinus.UseVisualStyleBackColor = false;
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
            this.btnNegate.Location = new System.Drawing.Point(2, 252);
            this.btnNegate.Margin = new System.Windows.Forms.Padding(2);
            this.btnNegate.Name = "btnNegate";
            this.btnNegate.Size = new System.Drawing.Size(67, 46);
            this.btnNegate.TabIndex = 25;
            this.btnNegate.Text = "±";
            this.btnNegate.UseVisualStyleBackColor = false;
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
            this.btnOne.Location = new System.Drawing.Point(73, 252);
            this.btnOne.Margin = new System.Windows.Forms.Padding(2);
            this.btnOne.Name = "btnOne";
            this.btnOne.Size = new System.Drawing.Size(67, 46);
            this.btnOne.TabIndex = 26;
            this.btnOne.Text = "1";
            this.btnOne.UseVisualStyleBackColor = false;
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
            this.btnTwo.Location = new System.Drawing.Point(144, 252);
            this.btnTwo.Margin = new System.Windows.Forms.Padding(2);
            this.btnTwo.Name = "btnTwo";
            this.btnTwo.Size = new System.Drawing.Size(67, 46);
            this.btnTwo.TabIndex = 27;
            this.btnTwo.Text = "2";
            this.btnTwo.UseVisualStyleBackColor = false;
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
            this.btnThree.Location = new System.Drawing.Point(215, 252);
            this.btnThree.Margin = new System.Windows.Forms.Padding(2);
            this.btnThree.Name = "btnThree";
            this.btnThree.Size = new System.Drawing.Size(67, 46);
            this.btnThree.TabIndex = 28;
            this.btnThree.Text = "3";
            this.btnThree.UseVisualStyleBackColor = false;
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
            this.btnPlus.Font = new System.Drawing.Font("Segoe UI Light", 21F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnPlus.Location = new System.Drawing.Point(286, 252);
            this.btnPlus.Margin = new System.Windows.Forms.Padding(2);
            this.btnPlus.Name = "btnPlus";
            this.btnPlus.Size = new System.Drawing.Size(71, 46);
            this.btnPlus.TabIndex = 29;
            this.btnPlus.Text = "+";
            this.btnPlus.UseVisualStyleBackColor = false;
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
            this.btnLeftParentheses.Location = new System.Drawing.Point(2, 302);
            this.btnLeftParentheses.Margin = new System.Windows.Forms.Padding(2);
            this.btnLeftParentheses.Name = "btnLeftParentheses";
            this.btnLeftParentheses.Size = new System.Drawing.Size(67, 48);
            this.btnLeftParentheses.TabIndex = 30;
            this.btnLeftParentheses.Text = "(";
            this.btnLeftParentheses.UseVisualStyleBackColor = false;
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
            this.btnRightParentheses.Location = new System.Drawing.Point(73, 302);
            this.btnRightParentheses.Margin = new System.Windows.Forms.Padding(2);
            this.btnRightParentheses.Name = "btnRightParentheses";
            this.btnRightParentheses.Size = new System.Drawing.Size(67, 48);
            this.btnRightParentheses.TabIndex = 31;
            this.btnRightParentheses.Text = ")";
            this.btnRightParentheses.UseVisualStyleBackColor = false;
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
            this.btnZero.Location = new System.Drawing.Point(144, 302);
            this.btnZero.Margin = new System.Windows.Forms.Padding(2);
            this.btnZero.Name = "btnZero";
            this.btnZero.Size = new System.Drawing.Size(67, 48);
            this.btnZero.TabIndex = 32;
            this.btnZero.Text = "0";
            this.btnZero.UseVisualStyleBackColor = false;
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
            this.btnDot.Location = new System.Drawing.Point(215, 302);
            this.btnDot.Margin = new System.Windows.Forms.Padding(2);
            this.btnDot.Name = "btnDot";
            this.btnDot.Size = new System.Drawing.Size(67, 48);
            this.btnDot.TabIndex = 33;
            this.btnDot.Text = "∙";
            this.btnDot.UseVisualStyleBackColor = false;
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
            this.btnEqual.Font = new System.Drawing.Font("Segoe UI Light", 21F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnEqual.Location = new System.Drawing.Point(286, 302);
            this.btnEqual.Margin = new System.Windows.Forms.Padding(2);
            this.btnEqual.Name = "btnEqual";
            this.btnEqual.Size = new System.Drawing.Size(71, 48);
            this.btnEqual.TabIndex = 34;
            this.btnEqual.Text = "=";
            this.btnEqual.UseVisualStyleBackColor = false;
            // 
            // numberDisplay
            // 
            this.numberDisplay.AutoSize = true;
            this.numberDisplay.Dock = System.Windows.Forms.DockStyle.Right;
            this.numberDisplay.Font = new System.Drawing.Font("Segoe UI Semibold", 36F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.numberDisplay.Location = new System.Drawing.Point(307, 90);
            this.numberDisplay.Name = "numberDisplay";
            this.numberDisplay.Size = new System.Drawing.Size(55, 91);
            this.numberDisplay.TabIndex = 0;
            this.numberDisplay.Text = "0";
            this.numberDisplay.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
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
            this.topPanel.Size = new System.Drawing.Size(365, 31);
            this.topPanel.TabIndex = 1;
            // 
            // dragPanel
            // 
            this.dragPanel.Controls.Add(this.title);
            this.dragPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dragPanel.Location = new System.Drawing.Point(0, 0);
            this.dragPanel.Margin = new System.Windows.Forms.Padding(0);
            this.dragPanel.Name = "dragPanel";
            this.dragPanel.Size = new System.Drawing.Size(225, 31);
            this.dragPanel.TabIndex = 0;
            this.dragPanel.MouseDown += new System.Windows.Forms.MouseEventHandler(this.GetMousePosition);
            this.dragPanel.MouseMove += new System.Windows.Forms.MouseEventHandler(this.DragMouse);
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
            this.controlPanel.Location = new System.Drawing.Point(225, 0);
            this.controlPanel.Margin = new System.Windows.Forms.Padding(0);
            this.controlPanel.Name = "controlPanel";
            this.controlPanel.RowCount = 1;
            this.controlPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.controlPanel.Size = new System.Drawing.Size(140, 31);
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
            this.btnMinimize.Size = new System.Drawing.Size(46, 31);
            this.btnMinimize.TabIndex = 0;
            this.btnMinimize.Text = "➖";
            this.btnMinimize.UseVisualStyleBackColor = true;
            this.btnMinimize.Click += new System.EventHandler(this.btnMinimize_Click);
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
            this.btnMaxNormal.Location = new System.Drawing.Point(46, 0);
            this.btnMaxNormal.Margin = new System.Windows.Forms.Padding(0);
            this.btnMaxNormal.Name = "btnMaxNormal";
            this.btnMaxNormal.Size = new System.Drawing.Size(46, 31);
            this.btnMaxNormal.TabIndex = 1;
            this.btnMaxNormal.Text = "⬜";
            this.btnMaxNormal.UseVisualStyleBackColor = true;
            this.btnMaxNormal.Click += new System.EventHandler(this.btnMaxNormal_Click);
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
            this.btnExit.Location = new System.Drawing.Point(92, 0);
            this.btnExit.Margin = new System.Windows.Forms.Padding(0);
            this.btnExit.Name = "btnExit";
            this.btnExit.Size = new System.Drawing.Size(48, 31);
            this.btnExit.TabIndex = 2;
            this.btnExit.Text = "✕";
            this.btnExit.UseVisualStyleBackColor = true;
            this.btnExit.Click += new System.EventHandler(this.btnExit_Click);
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
            this.title.MouseDown += new System.Windows.Forms.MouseEventHandler(this.GetMousePosition);
            this.title.MouseMove += new System.Windows.Forms.MouseEventHandler(this.DragMouse);
            // 
            // Calculator
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 17F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(32)))), ((int)(((byte)(32)))), ((int)(((byte)(32)))));
            this.ClientSize = new System.Drawing.Size(365, 630);
            this.Controls.Add(this.mainLayout);
            this.Font = new System.Drawing.Font("Segoe UI Semibold", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Name = "Calculator";
            this.Opacity = 0.98D;
            this.Text = "Calculator";
            this.mainLayout.ResumeLayout(false);
            this.buttonLayout.ResumeLayout(false);
            this.displayLayout.ResumeLayout(false);
            this.displayLayout.PerformLayout();
            this.topPanel.ResumeLayout(false);
            this.dragPanel.ResumeLayout(false);
            this.dragPanel.PerformLayout();
            this.controlPanel.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel mainLayout;
        private System.Windows.Forms.TableLayoutPanel buttonLayout;
        private System.Windows.Forms.TableLayoutPanel displayLayout;
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
        private System.Windows.Forms.Button button11;
        private System.Windows.Forms.Button btnModulos;
        private System.Windows.Forms.Button btnExponential;
        private System.Windows.Forms.Button btnLog;
        private System.Windows.Forms.Button btnTenPowerX;
        private System.Windows.Forms.Button btnSquareRoot;
        private System.Windows.Forms.Button btnTangent;
        private System.Windows.Forms.Button btnCosine;
        private System.Windows.Forms.Button btnSine;
        private System.Windows.Forms.Button btnXPowerY;
        private System.Windows.Forms.Button btnXSquare;
        private System.Windows.Forms.Label numberDisplay;
        private System.Windows.Forms.TableLayoutPanel topPanel;
        private System.Windows.Forms.Panel dragPanel;
        private System.Windows.Forms.TableLayoutPanel controlPanel;
        private System.Windows.Forms.Button btnMinimize;
        private System.Windows.Forms.Button btnMaxNormal;
        private System.Windows.Forms.Button btnExit;
        private System.Windows.Forms.Label title;
    }
}

