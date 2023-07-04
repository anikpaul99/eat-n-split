import { useState } from "react";
import Button from "./Button";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import { initialFriends } from "../data.js";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  /**
   * Show and close the form for adding friend
   */
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  /**
   * Will add new friend
   * @param {Object} friend the new friend object created after adding a friend
   * @returns {Undefined}
   */
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  /**
   * update the selectedFriend state with selected friend object and open up / close the split form. Now the split form will be opened with the selected friends information. The form to add friend will be closed if it is opened.
   * @param {Object} friend the friend object which is selected from friends list
   * @returns {Undefined}
   */
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  /**
   * Will update the users balance after spliting the blill
   * @param {number} value the amount after spliting up the bill
   */
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
