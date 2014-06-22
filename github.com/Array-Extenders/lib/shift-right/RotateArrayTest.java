import java.util.*;
import java.lang.*;
import java.io.*;

public class RotateArrayTest{

	public static void main (String[] args) throws java.lang.Exception
	{
		List<Object> inputList = new ArrayList<Object>();
		int max = 7;
		int rotateBy = 2;
		for(Integer i = 0; i<=max; i++){
			inputList.add(i+1);
		}
		for(int i=0; i<inputList.size(); i++){
			System.out.print(String.format("%s |", inputList.get(i)));
		}
		System.out.println("");
		
		inputList = rotateArray(inputList, 2);
		for(int i=0; i<inputList.size(); i++){
			System.out.print(String.format("%s |", inputList.get(i)));
		}
		System.out.println("");

/*** * Rotate From a,b,c,d,e,f,g  Rotate   To * e,f,g,a,b,c,d * ***/;
 
		List<Object> alphabets = new ArrayList<Object>();
		alphabets.add("a");
		alphabets.add("b");
		alphabets.add("c");
		alphabets.add("d");
		alphabets.add("e");
		alphabets.add("f");
		alphabets.add("g");
		rotateBy = 3;
		System.out.println("");
		System.out.println("");
		for(int i=0; i<alphabets.size(); i++){
			System.out.print(String.format("%s |", alphabets.get(i)));
		}		
System.out.println("");

		alphabets = rotateArray(alphabets, rotateBy);
		
		for(int i=0; i<alphabets.size(); i++){
			System.out.print(String.format("%s |", alphabets.get(i)));
		}		
	}
	


}
