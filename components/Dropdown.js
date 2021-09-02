import React, { useRef, useState } from "react";
import onClickOutside from "react-onclickoutside";
import Image from "next/image";

function Dropdown({ title, subtitle, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const [option, setOption] = useState({ plan: "Basic Pack", price: "Free" });

  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;

      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function handleChange(item) {
    selection([item.plan]);
    console.log(selection);
  }

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      console.log(selection);
      return true;
    }
    return false;
  }

  const handleSelectChange = (plan, price) => {
    setValues({ ...selection, options: { plan, price } });
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        className="dropdown-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dropdown-header__title">
          <p className="dropdown-header__title--bold">
            <span>{option.plan}</span>
            {option.price}
          </p>

          <div>
            <div
              className={`dropdown-header__action ${
                open ? "toggle-up" : "toggle-down"
              }`}
            >
              <Image
                priority
                src="/assets/sign-up/icon-arrow-down.svg"
                width={13}
                height={8}
                alt="arrow icon"
              />
            </div>
          </div>
        </div>
      </div>
      {open && (
        <ul id="fade" className="dropdown-list">
          {items.map((item) => (
            <li
              className="dropdown-list__item"
              key={item.id}
              onClick={() => setOption({ plan: item.plan, price: item.price })}
            >
              <button
                type="button"
                onChange={handleSelectChange}
                onClick={() => handleOnClick(item)}
              >
                <div className="dropdown-list__chosen">
                  <span>{item.plan}</span>
                  {item.price}
                </div>
                <span className="dropdown-list__item--select">
                  {isItemInSelection(item) && (
                    <Image
                      src="/assets/sign-up/icon-check.svg"
                      width={15}
                      height={12}
                      alt="icon check"
                    />
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
        @import "./styles/mixins.scss";
        .dropdown {
          width: 279px;
          height: 45px;
          margin: 12px 24px;
          border: 0;
          outline: 0;
          border-bottom: 1px solid var(--grey);
          color: var(--grey);
          font-size: 16px;
          line-height: 28px;
          text-indent: 16px;
          cursor: pointer;
          overflow: hidden;

          &:hover,
          &:focus {
            border-bottom: 2px solid var(--midblue);
          }

          @include tablet {
            width: 360px;
          }

          #fade {
            animation: fadeIn 0.2s ease-in-out;
            transition: fadeOut 0.2s ease-in-out;

            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: translateY(-2rem);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes fadeOut {
              0% {
                opacity: 1;
                transform: translateY(0);
              }
              100% {
                opacity: 0;
                transform: translateY(-2rem);
              }
            }
          }

          ul {
            width: 279px;
            position: absolute;
            bottom: 35px;
            border-radius: 30px;
            box-shadow: 2px 12px 12px 2px rgba(0, 0, 255, 0.2);

            @include tablet {
              box-shadow: 20px 12px 12px 12px rgba(0, 0, 255, 0.2);
            }
          }
          .dropdown-header__title {
            display: flex;
            justify-content: space-between;

            p {
              span {
                font-weight: var(--header-font);
              }
            }
          }

          .dropdown-header__action {
            display: flex;
            align-items: center;
            padding: 0.75rem 0;
            line-height: 1.75rem;
            position: absolute;
          }
          .toggle-up {
            transition: transform 200ms ease-in-out;
            transform: rotate(180deg);
          }
          .toggle-down {
            transition: transform 200ms ease-in-out;
          }

          .dropdown-list__item {
            list-style-type: none;
            transition: transform 200ms ease-in-out;
            z-index: 1;

            &:first-of-type {
              > button {
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
              }
            }

            &:last-of-type > button {
              border-bottom-left-radius: 8px;
              border-bottom-right-radius: 8px;
              border-bottom: none;
            }
            button {
              display: flex;
              background-color: transparent;
              font-size: 16px;
              text-align: left;
              color: var(--grey);
              font-weight: var(--header-font);
              padding: 15px 20px 15px 20px;
              border: 0;
              border-bottom: 1px solid var(--grey);
              width: 100%;
              width: 279px;
              height: 66px;
              background-color: var(--white);
              align-items: center;
              justify-content: space-between;

              @include tablet {
                width: 360px;
              }

              span {
                margin-right: 7px;
                color: var(--slategrey);
              }

              &:hover,
              &:focus {
                cursor: pointer;
                font-weight: bold;
                background-color: mix(white, grey, $weight: 80%);
              }
            }

            color: var(--grey);
          }
          .dropdown-list__item--select {
            justify-content: space-between;
            text-indent: right;
          }

          .dropdown-header__title {
            boder-color: transparent;
            border-radius: 4px;
            border-style: none;
            border-width: 1px;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            width: 90%;
            color: var(--grey);
            p {
              font-weight: var(--header-font);
              span {
                padding-right: 7px;
                color: var(--slategrey);
              }
            }
          }

          .dropdown__list {
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

            padding: 0;
            margin: 0;
            width: 100%;
            margin-top: 30px;
            @include tablet {
              border: 1px solid var(--grey);
            }
          }
        }
      `}</style>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);

const Plan = ({ val }) => {
  switch (val) {
    case "Basic Pack":
      return "Basic Pack";
    case "Pro Pack":
      return "Pro Pack";
    case "Ultimate Pack":
      return "Ultimate Pack";
    default:
      return "Ultimate Pack";
  }
};
