import InputComment from './InputComment';

export default function Home() {
  return (
    <div className="grid grid-cols-2 grid-rows-6 gap-6 h-screen">
      <div className="shadow-sm bg-white rounded-lg">shadow-sm</div>
      <div className="shadow bg-white rounded-lg">shadow</div>
      {/* css 동적 변화는 아랫줄과 같이 수행 */}
      <div className="row-start-5 row-span-2 col-span-2">
        <InputComment />
      </div>
    </div>
  );
}
