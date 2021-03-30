// �y�[�W���ǂݍ��܂ꂽ�����s
window.onload = function() {

     // �I�u�W�F�N�g�ƕϐ��̏���
     var count_disp = document.getElementById("disp_count");
     var count_up_btn = document.getElementById("btn_count_up");
     var reset_btn = document.getElementById("btn_reset");
     var count_value = 0;

     // �J�E���g�A�b�v�{�^���N���b�N����
     count_up_btn.onclick = function (){
          count_value += 1;
          count_disp.innerHTML = count_value;
     };
     // �J�E���g�A�b�v�{�^���̃}�E�X�_�E������
     count_up_btn.onmousedown = function() {
          count_up_btn.style.backgroundColor = "#00FF00";
     }
     // �J�E���g�A�b�v�{�^���̃}�E�X�A�b�v����
     count_up_btn.onmouseup = function() {
          count_up_btn.style.backgroundColor = "";
     }
     // ���Z�b�g�{�^���̃N���b�N����
     reset_btn.onclick = function (){
          count_value = 0; count_disp.innerHTML = count_value;
     }
     // ���Z�b�g�{�^���̃}�E�X�_�E������
     reset_btn.onmousedown = function() {
          reset_btn.style.backgroundColor = "#00FF00";
     }
     // ���Z�b�g�{�^���̃}�E�X�A�b�v����
     reset_btn.onmouseup = function() {
          reset_btn.style.backgroundColor = "";
     }
};
