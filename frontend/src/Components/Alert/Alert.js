import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Alert.css';

export const Alert = props => {
  const [alerts, setAlerts] = useState(props.alerts || []);

  const item = {
    initial: "hidden",
    animate: "show",
    exit: "hidden",
    variants: {
      hidden: {
        opacity: 0,
        y: 30,
        transition: {
          ease: "linear"
        }
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          staggerChildren: 0.1
        }
      }
    }
  }

  const content = {
    initial: "hidden",
    animate: "show",
    exit: "hidden",
    variants: {
      hidden: {
        opacity: 0,
        y: 5,
        transition: {
          ease: "linear"
        }
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear"
        }
      }
    }
  };

  const icons = {
    success: 'gg-check',
    error: 'gg-close'
  }

  const dismissHandler = (e, id) => {
    e.preventDefault();
    props.setAlerts(alerts.filter(alert => alert.id !== id));
  }

  useEffect(() => {
    setAlerts(props.alerts);
  }, [props.alerts, alerts]);

  return (
    <AnimatePresence>
      <div className="alerts-container">
        {
          alerts && alerts.map(alert => {
            return (
              <motion.div
                key={alert.id}
                {...item}
                onClick={(e) => dismissHandler(e, alert.id)}
                className={`alert alert-${alert.type}`}>
                <motion.span
                  {...content}
                  className="alert-icon">
                  <i className={icons[alert.type]}></i>
                </motion.span>
                <motion.span
                  {...content}
                  className="message">
                  {alert.message}
                </motion.span>
              </motion.div>
            )
          })
        }
      </div>
    </AnimatePresence>
  )
}