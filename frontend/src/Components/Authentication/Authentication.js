import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UserService from '../../Services/UserService';
import './Authentication.css';

const Authentication = props => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  }

  const toggleType = e => {
    e.preventDefault();
    setIsLogin(!isLogin);
  }

  const handleCancel = e => {
    e.preventDefault();
    props.cancel(true);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (isLogin) {
      UserService.authenticate(username, password).then(response => {
        alert("You've signed in as " + response.username);
        console.log(response);
      }).catch(err => {
        alert("Error signing in\n" + err);
      });
    } else {
      UserService.register(username, password, confirmPassword).then(response => {
        alert("You've registerred in as " + response.username);
        console.log(response);
      }).catch(err => {
        alert("Error signing up\n" + err);
      });
    }
  }

  useEffect(() => {
    if (props.isAuthenticated) props.cancel(true);
    if (props.register) setIsLogin(false);
  }, []);

  return (
    <AnimatePresence>
      <div className="authentication">
        <div className="header">
          <div className="logo"></div>
          <span>Kracken Torrents</span>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="content">
          <h4>Begin Your Journey</h4>
          <motion.h1
            variants={item}
            transition={{ ease: "linear"}}
            >{isLogin ? "Log in to your account" : "Create an account"}<i>.</i></motion.h1>
          <motion.span variants={item} transition={{ ease: "linear"}}>
            {
              isLogin ? "Not a member? " : "Already a member? "
            }
            <a href="#" onClick={toggleType}>{isLogin ? "Sign up" : "Log in"}</a>
          </motion.span>
          <motion.div
            variants={item}
            transition={{ ease: "linear"}}
            className="group">
            <input
              type="text"
              value={username}
              onChange={e => {
                e.preventDefault();
                setUsername(e.target.value);
              }}
              required/>
            <span>Username</span>
          </motion.div>
          <motion.div
            variants={item}
            transition={{ ease: "linear"}}
            className="group">
            <input
              type="password"
              value={password}
              onChange={e => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
              required/>
            <span>Password</span>
          </motion.div>
          {
            isLogin ? null : (
              <motion.div
              variants={item}
              transition={{ ease: "linear"}}
              className="group">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={e => {
                    e.preventDefault();
                    setConfirmPassword(e.target.value);
                  }}
                  required/>
                <span>Confirm Password</span>
              </motion.div>
            )
          }
          <motion.div
            variants={item}
            transition={{ ease: "linear"}}
            className="group buttons">
            <button
              onClick={handleCancel}
              >Cancel</button>
            <button
              onClick={handleSubmit}
              className="primary">{isLogin ? "Log in" : "Sign Up"}</button>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default Authentication;