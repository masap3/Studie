//�����N��փW�����v������֐�
function noch()
	{
	//�u���̒��ɂ͖����v���`�F�b�N����Ă��邩�m�F
	if( document.chkbox.elements[5].checked )
		{
    	//�`�F�b�N����Ă�����A���̍��ڂ̃`�F�b�N���O��
			for( i=0 ; i<5 ; i++)
		{
			document.chkbox.elements[i].checked=false;
		}
	}
}

function boxCheck()
	{
	noch();
	
		//�`�F�b�N���ꂽ���ڂ��L�^����ϐ�
		var str="";

		//for���Ń`�F�b�N�{�b�N�X���P���m�F
		for( i=0; i<6; i++ )
		{
			//�`�F�b�N����Ă��邩�m�F����
			if( document.chkbox.elements[i].checked )
		{
			//�ϐ�str����łȂ����A��؂�̃R���}������
			if( str != "" ) str=str+",";

			//�`�F�b�N�{�b�N�X��value�l��ϐ�str�ɓ����
			str=str+document.chkbox.elements[i].value;
		}
	}
		//str����̎��A�x�����o��
		if( str=="" )
		{
			alert( "�ǂꂩ�I�����Ă��������B" );
		}
		else
	{
		alert( str + "���I������܂����B" );
	}
}

function formWrite2()
{
	document.write2('<form name="chkbox">');
	document.write2('<p>���Ȃ��̍D���ȓ����́H�i�����j</p>');
	document.write2('<input type="checkbox" value="�C�k">�C�k<br>');
	document.write2('<input type="checkbox" value="�l�R">�l�R<br>');
	document.write2('<input type="checkbox" value="�E�T�M">�E�T�M<br>');
	document.write2('<input type="checkbox" value="�n���X�^�[">�n���X�^�[<br>');
	document.write2('<input type="checkbox" value="���C�I��">���C�I��<br>');
	document.write2('<input type="checkbox" value="��">���̒��ɂ͖���<br>');
	document.write2('<input type="button" value="�m�F" onclick="boxCheck()">');
	document.write2('</form><br>');
}



