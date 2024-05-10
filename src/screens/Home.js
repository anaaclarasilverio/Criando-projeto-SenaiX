import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../context/useAuth";

export default function Home() {
    const { user, signOut } = useAuth();
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{ fontSize: 24 }}>{user.username}</Text>
            <Text style={{ fontSize: 24 }}>{user.email}</Text>
            <TouchableOpacity onPress={() => signOut()}>
                <Text>Sair</Text>
            </TouchableOpacity>

        </View>
    )
}
