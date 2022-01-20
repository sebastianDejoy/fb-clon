import LoginFooter from './LoginFooter';

export default function Login() {
  return (
    <div>
      <div className="bg-gray-fb h-96 grid grid-cols-2 justify-center content-center">
        <div className="outline-dashed">Logo</div>
        <div className="outline-dashed">
          CardLogin
        </div>
      </div>
      <LoginFooter />
    </div>
  );
}
