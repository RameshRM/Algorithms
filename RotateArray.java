/* package whatever; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class RotateArray
{
	
	public static void main (String[] args) throws java.lang.Exception
	{
		List<Object> inputList = new ArrayList<Object>();
		int max = 7;
		int rotateBy = 2;
		for(Integer i = 0; i<=max; i++){
			inputList.add(i+1);
		}
		for(int i=0; i<inputList.size()-1; i++){
			System.out.print(String.format("%s |", inputList.get(i)));
		}
		System.out.println("");
		
		inputList = rotateArray(inputList, 2);
		for(int i=0; i<inputList.size()-1; i++){
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
		alphabets = rotateArray(alphabets, rotateBy);
		
		for(int i=0; i<alphabets.size()-1; i++){
			System.out.print(String.format("%s |", alphabets.get(i)));
		}		
	}
	
	public static List<Object> rotateArray(List<Object> inputs, int k){
		int counter=-1;
		int end = inputs.size()-1;
		int start = end-k;
		Object current;
		Object shifted;
		for(int i=start; i<end; i++){
			counter++;
			shifted = inputs.get(i);
			current = inputs.get(counter);
			inputs.set(i, current);
			inputs.set(counter, shifted);
		}
		return inputs;
		
	}
}
