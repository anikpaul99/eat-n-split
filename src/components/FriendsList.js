import Friend from "./Friend";

/**
 * Component to show all the friends list
 * @prop {Object []} friends the initial friends state
 * @returns {JSX.Element}
 * @author Anik Paul
 */
export default function FriendsList({ friends, selectedFriend, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
