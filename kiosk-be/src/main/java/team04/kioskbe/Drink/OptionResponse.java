package team04.kioskbe.Drink;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class OptionResponse {
    private final String type;
    private final List<OptionValue> values;

    public OptionResponse(String type, List<OptionValue> values) {
        this.type = type;
        this.values = values;
    }

    public static List<OptionResponse> valueOf(Map<String, List<OptionValue>> optionMap) {
        List<OptionResponse> list = new ArrayList<>();
        for (String key : optionMap.keySet()) {
            list.add(new OptionResponse(key, optionMap.get(key)));
        }
        return list;
    }
}
