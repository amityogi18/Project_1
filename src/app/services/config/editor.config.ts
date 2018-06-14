import { Injectable } from '@angular/core';

@Injectable()
export class EditorConfig {
  branding : boolean = false;
  height: number = 100;
  theme: string = 'modern';
  //plugins: string[] = [];
  toolbar1 = `bold italic underline | fontselect fontsizeselect forecolor | 
              undo redo | alignleft aligncenter alignright alignjustify | 
              bullist numlist outdent indent  | customButton`;
  image_advtab = true;
  templates: string[] = [];
  content_css: string[] =  [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tinymce.com/css/codepen.min.css'
  ];
  //toolbar= 'customButton';
  plugins = `print preview fullpage powerpaste searchreplace autolink directionality
            advcode visualblocks visualchars fullscreen image link media template
            codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime
            advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools
            mediaembed linkchecker contextmenu colorpicker textpattern help`;
  menubar = false;
  //statusbar = false;
  elementpath = false;
  forced_root_block = 'div';
  fullpage_default_font_family = 'Arial';
  fullpage_default_font_size = '10pt';
  setup = function (editor) {
    editor.addButton('customButton', {
      text: 'Standard Language',
      icon: false,
      tooltip : 'Standard Language',
      onclick: function () {
        editor.insertContent('Per WGA');
      }
    });
  };
}
