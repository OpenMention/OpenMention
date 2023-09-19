'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export default function InputComment() {
  const [comment, setComment] = useState<string>('');
  const [buttonActive, setButtonActive] = useState<boolean>();
  const [buttonActiveBgColor, setButtonActiveBgColor] = useState<string>('bg-gray-500');

  useEffect(() => {
    setButtonActive(comment === '');
    setButtonActiveBgColor(comment !== '' ? 'bg-emerald-500' : 'bg-gray-500');
  }, [comment]);

  // 테스트 데이터
  const userList = {
    data: [
      {
        user_num: '1',
        user_id: 'abc123',
        user_name: '김길동',
      },
      {
        user_num: '2',
        user_id: 'bbb123',
        user_name: '홍길동',
      },
      {
        user_num: '3',
        user_id: 'ccc111',
        user_name: '강길동',
      },
      {
        user_num: '4',
        user_id: 'afadfea23',
        user_name: '장길동',
      },
      {
        user_num: '5',
        user_id: 'rejwaij57',
        user_name: '박길동',
      },
      {
        user_num: '6',
        user_id: 'rejwaij66',
        user_name: '국길동',
      },
    ],
  };
  // 테스트 데이터 .

  const [mentionActive, setMentionActive] = useState<string>('hidden');

  useEffect(() => {
    // 여기 들어가는 내용을 패키지화 할 것
    if (comment.includes('@')) {
      setMentionActive('block');
    } else {
      setMentionActive('hidden');
    }
    // 여기 들어가는 내용을 패키지화 할 것 .
  }, [comment]);

  return (
    buttonActiveBgColor && (
      <div className="grid grid-cols-11 grid-rows-2 gap-0">
        {/* 멘션 리스트 */}
        <div
          className={`row-start-1 col-span-11 pl-0 pt-1 mx-1.5 mb-0 bg-gray-700 text-slate-200 rounded border-0 overflow-scroll h-24 ${mentionActive}`}
        >
          {userList.data.map((user) => (
            <button key={user.user_num} type="button" className="my-1 w-full text-left pl-3 p-1">
              {user.user_name}
            </button>
          ))}
        </div>
        {/* 멘션 리스트 . */}

        {/* 하단 댓글 입력 창 */}
        <textarea
          className="row-start-2 col-span-9 mx-1 px-3 pt-2 pb-3 text-slate-200 bg-gray-700 block min-h-[auto] w-full rounded border-0 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-slate-400"
          id="exampleFormControlTextarea1"
          rows={3}
          placeholder="Your message"
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
        />
        <button
          type="button"
          className={`${buttonActiveBgColor} col-span-2 rounded-r-lg row-start-2 mr-1`}
          disabled={buttonActive}
        >
          <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: 27 }} className="text-slate-50" />
        </button>
        {/* 하단 댓글 입력 창 . */}
      </div>
    )
  );
}
