import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import { isNamedTupleMember } from "typescript";

function Dropdown({ title, subtitle, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
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

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

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
            <span>{title}</span>
            {subtitle}
          </p>
          <div className="dropdown-header__action">
            <p>{open ? "Close" : "Open"}</p>
          </div>
        </div>
      </div>
      {open && (
        <ul className="dropdown-list">
          {items.map((item) => (
            <li className="dropdown-list__item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <div>
                  <span>{item.plan}</span>
                  {item.price}
                </div>
                <span className="dropdown-list__item--select">
                  {isItemInSelection(item) && "Selected"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
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

          ul {
            width: 279px;
            position: absolute;
            bottom: 35px;
            border-radius: 30px;
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

          .dropdown-list__item {
            list-style-type: none;
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
              border-bottom: 1px solid #ccc;
              width: 100%;
              width: 279px;
              height: 66px;
              background-color: var(--white);
              justify-content: space-between;

              span {
                margin-right: 7px;
                color: var(--slategrey);
              }

              &:hover,
              &:focus {
                cursor: pointer;
                font-weight: bold;
                background-color: #ccc;
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
            /* padding: 0 20px; */
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
            box-shadow: none;
            padding: 0;
            margin: 0;
            width: 100%;
            margin-top: 30px;
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
