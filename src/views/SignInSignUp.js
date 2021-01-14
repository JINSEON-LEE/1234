
import React from 'react';
import { I18n } from 'aws-amplify';
import { AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';


const authScreenLabels = {
    en: {
        'Forgot your password?' : '암호를 잊어버렸나요?',
        'Reset password' : '비밀번호 재설정', 
        'Sign In': '로그인',
        'No account?' : '아직 비회원이신가요?',
        'Create account': '회원가입',
        'Create Account': '계정 만들기',
        'Sign in' : "로그인",
        'Have an account?' : "이미 회원이신가요?"
    }
  };
  
  I18n.setLanguage('en');
  I18n.putVocabularies(authScreenLabels);

  function UnivaSignIn(){
  
    return (<AmplifySignIn
      slot="sign-in"
      headerText="로그인"
      formFields={[
        { type: "email",  label: '이메일', placeholder: 'Email', required: true },
        { type: "password", label: '비밀번호', placeholder: 'password', required: true }
      ]}
  
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Hide create account link */}
      {/* <div slot="secondary-footer-content"></div> */}
    </AmplifySignIn>);
  }
  
  
  function UnivaSignUp(){
      
    return ( <AmplifySignUp 
          
        headerText="회원가입"
        slot="sign-up"
        formFields={[
          { type: "email",  label: '이메일', placeholder: 'Email', required: true },
          { type: "password", label: '비밀번호', placeholder: 'password', required: true },
          { type: "username" , label: '아이디', placeholder: 'Email', required: true},
          {
              type: "gender",
              label: "성별",
              placeholder: "(male/female)",
              required: true
          },
          {
              type: "birthdate",
              label: "생일",
              placeholder: "(yyyy/mm/dd)",
              required: true
          },
        ]}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        
       
      /> );
  }


  
  export {UnivaSignIn, UnivaSignUp};
 