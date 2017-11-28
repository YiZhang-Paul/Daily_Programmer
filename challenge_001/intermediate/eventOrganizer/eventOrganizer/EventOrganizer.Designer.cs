namespace eventOrganizer {
    partial class EventOrganizer {
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
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle5 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle6 = new System.Windows.Forms.DataGridViewCellStyle();
            this.MainPanel = new System.Windows.Forms.Panel();
            this.MainLayout = new System.Windows.Forms.TableLayoutPanel();
            this.ControlLayout = new System.Windows.Forms.TableLayoutPanel();
            this.Add = new System.Windows.Forms.Button();
            this.Edit = new System.Windows.Forms.Button();
            this.Delete = new System.Windows.Forms.Button();
            this.DisplayLayout = new System.Windows.Forms.TableLayoutPanel();
            this.Title = new System.Windows.Forms.Label();
            this.EventList = new System.Windows.Forms.DataGridView();
            this.MainPanel.SuspendLayout();
            this.MainLayout.SuspendLayout();
            this.ControlLayout.SuspendLayout();
            this.DisplayLayout.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.EventList)).BeginInit();
            this.SuspendLayout();
            // 
            // MainPanel
            // 
            this.MainPanel.Controls.Add(this.MainLayout);
            this.MainPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MainPanel.Location = new System.Drawing.Point(0, 0);
            this.MainPanel.Margin = new System.Windows.Forms.Padding(0);
            this.MainPanel.Name = "MainPanel";
            this.MainPanel.Size = new System.Drawing.Size(382, 377);
            this.MainPanel.TabIndex = 1;
            // 
            // MainLayout
            // 
            this.MainLayout.ColumnCount = 2;
            this.MainLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 80.04695F));
            this.MainLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 19.95305F));
            this.MainLayout.Controls.Add(this.ControlLayout, 1, 0);
            this.MainLayout.Controls.Add(this.DisplayLayout, 0, 0);
            this.MainLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MainLayout.Location = new System.Drawing.Point(0, 0);
            this.MainLayout.Margin = new System.Windows.Forms.Padding(0);
            this.MainLayout.Name = "MainLayout";
            this.MainLayout.RowCount = 1;
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.MainLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.MainLayout.Size = new System.Drawing.Size(382, 377);
            this.MainLayout.TabIndex = 0;
            // 
            // ControlLayout
            // 
            this.ControlLayout.ColumnCount = 1;
            this.ControlLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.ControlLayout.Controls.Add(this.Add, 0, 1);
            this.ControlLayout.Controls.Add(this.Edit, 0, 2);
            this.ControlLayout.Controls.Add(this.Delete, 0, 3);
            this.ControlLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.ControlLayout.Location = new System.Drawing.Point(305, 0);
            this.ControlLayout.Margin = new System.Windows.Forms.Padding(0);
            this.ControlLayout.Name = "ControlLayout";
            this.ControlLayout.RowCount = 5;
            this.ControlLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 55F));
            this.ControlLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 11F));
            this.ControlLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 11F));
            this.ControlLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 11F));
            this.ControlLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 67F));
            this.ControlLayout.Size = new System.Drawing.Size(77, 377);
            this.ControlLayout.TabIndex = 0;
            // 
            // Add
            // 
            this.Add.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(12)))), ((int)(((byte)(12)))), ((int)(((byte)(12)))));
            this.Add.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Add.FlatAppearance.BorderColor = System.Drawing.Color.Gray;
            this.Add.FlatAppearance.MouseDownBackColor = System.Drawing.Color.DodgerBlue;
            this.Add.FlatAppearance.MouseOverBackColor = System.Drawing.Color.RoyalBlue;
            this.Add.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Add.Font = new System.Drawing.Font("Segoe UI", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Add.Location = new System.Drawing.Point(3, 58);
            this.Add.Margin = new System.Windows.Forms.Padding(3, 3, 8, 3);
            this.Add.Name = "Add";
            this.Add.Size = new System.Drawing.Size(66, 29);
            this.Add.TabIndex = 0;
            this.Add.Text = "Add";
            this.Add.UseVisualStyleBackColor = false;
            this.Add.Click += new System.EventHandler(this.Add_Click);
            // 
            // Edit
            // 
            this.Edit.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(12)))), ((int)(((byte)(12)))), ((int)(((byte)(12)))));
            this.Edit.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Edit.FlatAppearance.BorderColor = System.Drawing.Color.Gray;
            this.Edit.FlatAppearance.MouseDownBackColor = System.Drawing.Color.DodgerBlue;
            this.Edit.FlatAppearance.MouseOverBackColor = System.Drawing.Color.RoyalBlue;
            this.Edit.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Edit.Font = new System.Drawing.Font("Segoe UI", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Edit.Location = new System.Drawing.Point(3, 93);
            this.Edit.Margin = new System.Windows.Forms.Padding(3, 3, 8, 3);
            this.Edit.Name = "Edit";
            this.Edit.Size = new System.Drawing.Size(66, 29);
            this.Edit.TabIndex = 1;
            this.Edit.Text = "Edit";
            this.Edit.UseVisualStyleBackColor = false;
            this.Edit.Click += new System.EventHandler(this.Edit_Click);
            // 
            // Delete
            // 
            this.Delete.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(12)))), ((int)(((byte)(12)))), ((int)(((byte)(12)))));
            this.Delete.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Delete.FlatAppearance.BorderColor = System.Drawing.Color.Gray;
            this.Delete.FlatAppearance.MouseDownBackColor = System.Drawing.Color.DodgerBlue;
            this.Delete.FlatAppearance.MouseOverBackColor = System.Drawing.Color.RoyalBlue;
            this.Delete.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Delete.Font = new System.Drawing.Font("Segoe UI", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Delete.Location = new System.Drawing.Point(3, 128);
            this.Delete.Margin = new System.Windows.Forms.Padding(3, 3, 8, 3);
            this.Delete.Name = "Delete";
            this.Delete.Size = new System.Drawing.Size(66, 29);
            this.Delete.TabIndex = 2;
            this.Delete.Text = "Delete";
            this.Delete.UseVisualStyleBackColor = false;
            this.Delete.Click += new System.EventHandler(this.Delete_Click);
            // 
            // DisplayLayout
            // 
            this.DisplayLayout.ColumnCount = 1;
            this.DisplayLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.DisplayLayout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.DisplayLayout.Controls.Add(this.Title, 0, 0);
            this.DisplayLayout.Controls.Add(this.EventList, 0, 1);
            this.DisplayLayout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.DisplayLayout.Location = new System.Drawing.Point(0, 0);
            this.DisplayLayout.Margin = new System.Windows.Forms.Padding(0);
            this.DisplayLayout.Name = "DisplayLayout";
            this.DisplayLayout.RowCount = 3;
            this.DisplayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 10.08403F));
            this.DisplayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 89.91597F));
            this.DisplayLayout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 42F));
            this.DisplayLayout.Size = new System.Drawing.Size(305, 377);
            this.DisplayLayout.TabIndex = 1;
            // 
            // Title
            // 
            this.Title.AutoSize = true;
            this.Title.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Title.Location = new System.Drawing.Point(3, 0);
            this.Title.Name = "Title";
            this.Title.Size = new System.Drawing.Size(299, 33);
            this.Title.TabIndex = 2;
            this.Title.Text = "Events";
            this.Title.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // EventList
            // 
            this.EventList.AllowUserToAddRows = false;
            this.EventList.AllowUserToDeleteRows = false;
            dataGridViewCellStyle5.BackColor = System.Drawing.Color.DarkGray;
            dataGridViewCellStyle5.ForeColor = System.Drawing.SystemColors.WindowText;
            this.EventList.AlternatingRowsDefaultCellStyle = dataGridViewCellStyle5;
            this.EventList.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(70)))), ((int)(((byte)(70)))), ((int)(((byte)(70)))));
            this.EventList.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.EventList.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.EventList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.EventList.Dock = System.Windows.Forms.DockStyle.Fill;
            this.EventList.GridColor = System.Drawing.Color.LightSkyBlue;
            this.EventList.Location = new System.Drawing.Point(8, 41);
            this.EventList.Margin = new System.Windows.Forms.Padding(8);
            this.EventList.MultiSelect = false;
            this.EventList.Name = "EventList";
            this.EventList.ReadOnly = true;
            this.EventList.RowHeadersVisible = false;
            dataGridViewCellStyle6.ForeColor = System.Drawing.SystemColors.WindowText;
            this.EventList.RowsDefaultCellStyle = dataGridViewCellStyle6;
            this.EventList.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.FullRowSelect;
            this.EventList.Size = new System.Drawing.Size(289, 285);
            this.EventList.TabIndex = 3;
            this.EventList.RowStateChanged += new System.Windows.Forms.DataGridViewRowStateChangedEventHandler(this.EventList_RowStateChanged);
            // 
            // EventOrganizer
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 21F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(37)))), ((int)(((byte)(37)))), ((int)(((byte)(37)))));
            this.ClientSize = new System.Drawing.Size(382, 377);
            this.Controls.Add(this.MainPanel);
            this.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.Name = "EventOrganizer";
            this.ShowIcon = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "EventOrganizer";
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.EventOrganizer_FormClosed);
            this.Load += new System.EventHandler(this.LoadUI);
            this.MainPanel.ResumeLayout(false);
            this.MainLayout.ResumeLayout(false);
            this.ControlLayout.ResumeLayout(false);
            this.DisplayLayout.ResumeLayout(false);
            this.DisplayLayout.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.EventList)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel MainPanel;
        private System.Windows.Forms.TableLayoutPanel MainLayout;
        private System.Windows.Forms.TableLayoutPanel ControlLayout;
        private System.Windows.Forms.Button Add;
        private System.Windows.Forms.Button Edit;
        private System.Windows.Forms.Button Delete;
        private System.Windows.Forms.TableLayoutPanel DisplayLayout;
        private System.Windows.Forms.Label Title;
        private System.Windows.Forms.DataGridView EventList;
    }
}

