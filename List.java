package com.company;

public class List {
    private ListElement head;

    public List(ListElement head) {
        this.head = head;
    }

    public List(double value){
        this.head = new ListElement(value);
    }

    public ListElement getHead(){
        return head;
    }

    public int size(){
        ListElement elem = head;
        int count = 0;
        while (elem != null){
            elem = elem.getNext();
            count++;
        }
        return count;
    }

    public ListElement get(int index){
        if (index < size()){
            ListElement elem = head;
            for (int i = 0; i < index; i++){
                elem = elem.getNext();
            }
            return elem;
        }
        return null;
    }

    public void add(ListElement elem, int index){
        ListElement element = get(index);
        elem.setNext(element.getNext());
        element.setNext(elem);
    }

    public void add(double value, int index){
        add(new ListElement(value), index);
    }

    public void push(ListElement element){
        add(element, size() - 1);
    }

    public void push(double value){
        push(new ListElement(value));
    }

    private void deleteNextElem(ListElement element){
        ListElement prev = head;
        ListElement curr = head.getNext();
        while (!(curr.getValue() == element.getValue())){
            prev = prev.getNext();
            curr = curr.getNext();
        }
        prev = prev.getNext();
        curr = curr.getNext();
        if (curr != null){
            deleteElement(prev, curr);
        }
    }

    public void deleteNextElem(int index){
        deleteNextElem(get(index));
    }

    private void deleteElement(ListElement prev, ListElement curr){
        prev.setNext(curr.getNext());
        curr.setNext(null);
    }

    public void joint(List list){
        ListElement elem = list.getHead();
        while (elem != null){
            this.push(new ListElement(elem.getValue()));
            elem = elem.getNext();
        }
    }
}
