// Modules
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import Image from 'next/image';
import { ChatBubbleProps } from './ChatBubble.type';

const ChatBubble: React.FC<ChatBubbleProps> = ({ image, senderName, message, time, isStart }) => {
  return (
    <div>
      <div className={`chat ${isStart ? `chat-start` : `chat-end`}`}>
        <div className="chat-image avatar">
          <div className="w-15 rounded-full">
            <Image src={image} alt="Chat profile" width={100} height={100} />
          </div>
        </div>
        <div className="chat-header text-sm md:text-md lg:text-lg">
          {senderName}
          <time className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 gradient-shift-animation">
            {time}
          </time>
        </div>
        <div className="text-sm md:text-xl lg:text-xl border-dotted border-2 bg-white shadow-2xl px-6 py-1 rounded-3xl font-bold">
          {message}
        </div>
        <div className="chat-footer opacity-50">
          {isStart ? (
            <>
              <span className="font-bold mt-2">Delivered</span>
              {<IoCheckmarkDoneSharp size={20} className="mt-2 text-blue-700" />}
            </>
          ) : (
            <>
              <span className="font-bold mt-2">Seen</span>
              {<IoCheckmarkDoneSharp size={20} className="mt-2 text-green-700" />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
