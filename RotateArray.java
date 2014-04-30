/* package whatever; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class RotateArray
{
	
	public static void main (String[] args) throws java.lang.Exception
	{
		List<Integer> inputList = new ArrayList<Integer>();
		int max = 7;
		int rotateBy = 2;
		for(int i = 0; i<=max; i++){
			inputList.add(i+1);
		}
for(int i=0; i<inputList.size()-1; i++){
			System.out.print(String.format("%s |", inputList.get(i)));
		}
		System.out.println("");
		
		inputList = rotateArray(inputList, rotateBy);
		for(int i=0; i<inputList.size()-1; i++){
			System.out.print(String.format("%s |", inputList.get(i)));
		}
		
	}
	
	public static List<Integer> rotateArray(List<Integer> numbers, int k){
		int counter=-1;
		int end = numbers.size()-1;
		int start = end-k;
		int current;
		int shifted;
		for(int i=start; i<end; i++){
			counter++;
			shifted = numbers.get(i);
			current = numbers.get(counter);
			numbers.set(i, current);
			numbers.set(counter, shifted);
		}
		return numbers;
		
	}
}
