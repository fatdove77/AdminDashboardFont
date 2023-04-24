import React from 'react'
import './style.scss'
import { PlusOutlined,LoadingOutlined,FileAddOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
import { useState } from 'react';
function New() {
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className="new">
      <div className="top">
        <div className="title">
          Add New User
        </div>
      </div>
      <div className="bottom">
        <div className="left">
        <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
        </div>
        <div className="right">
          <form>
          <div className="formInput">
               <label htmlFor='file' >Image : <FileAddOutlined className='icon' /></label>
              <input type="file" id='file' style = {{display: 'none'}} />
            </div>
            <div className="formInput">
              <label >UserName</label>
              <input type="text" placeholder="zjx" />
            </div>
            <div className="formInput">
              <label >Name and SurName</label>
              <input type="text" placeholder="fatdove" />
            </div>
            <div className="formInput">
              <label >Email</label>
              <input type="text" placeholder="fatdove0523@163.com" />
            </div>
            <div className="formInput">
              <label >Phone</label>
              <input type="text" placeholder="19157681096" />
            </div>
            <div className="formInput">
              <label >Email</label>
              <input type="text" placeholder="fatdove0523@163.com" />
            </div>
            <div className="formInput">
              <label >Password</label>
              <input type="text" placeholder="" />
            </div>
            <div className="formInput">
              <label >Country</label>
              <input type="text" placeholder="China" />
            </div>
            <Button className="btn">send</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default New