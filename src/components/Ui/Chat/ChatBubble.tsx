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
        <div className="chat-header">
          {senderName}
          <time className="text-xs opacity-50">{time}</time>
        </div>
        <div className="border-dotted border-2 bg-white shadow-2xl px-6 py-1 rounded-3xl">
          {message}
        </div>
        <div className="chat-footer opacity-50">
          {isStart ? (
            <>
              <span className="font-bold">Delivered</span>
              {<IoCheckmarkDoneSharp size={20} className="text-blue-700" />}
            </>
          ) : (
            <>
              <span className="font-bold">Seen</span>
              {<IoCheckmarkDoneSharp size={20} className="text-green-700" />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
