import Image from "next/image";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import { config } from "../../utils/loadConfig";
export default function (props: {
  aliPay: string;
  weChatPay: string;
  author: string;
  id: number;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-8">
      <div className="text-center  select-none text-sm md:text-base mb-2">
        如果对你有用的话，可以打赏哦
      </div>
      <div className="flex justify-center mb-6 ">
        <div
          onClick={() => [setShow(!show)]}
          className="text-sm md:text-base  text-gray-100 bg-red-600 rounded px-4 select-none cursor-pointer hover:bg-red-400 py-1"
        >
          打赏
        </div>
      </div>
      <div
        className="text-center transition-all overflow-hidden"
        style={{ maxHeight: show ? "300px" : "0px" }}
      >
        <Image src={props.weChatPay} width={180} height={250}></Image>
        <div className="w-4 inline-block"></div>
        <Image src={props.aliPay} width={180} height={250}></Image>
      </div>
      <div className=" bg-gray-100 px-5 border-l-4 border-red-500  py-2 text-sm space-y-1">
        <p>
          <span className="mr-2">本文作者:</span>
          <span>{props.author}</span>
        </p>
        <p>
          <span className="mr-2">本文链接:</span>
          <CopyToClipboard
            text={`${config.baseUrl}post/${props.id}`}
            onCopy={() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "复制成功！",
                showConfirmButton: false,
                timer: 1000,
              });
            }}
          >
            <a className="cursor-pointer border-b border-white hover:border-gray-500">{`${config.baseUrl}post/${props.id}`}</a>
          </CopyToClipboard>
        </p>
        <p>
          <span className="mr-2">版权声明:</span>
          <span>
            本博客所有文章除特别声明外，均采用 BY-NC-SA
            许可协议。转载请注明出处！
          </span>
        </p>
      </div>
    </div>
  );
}